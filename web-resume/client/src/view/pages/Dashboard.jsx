import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withRoot from '../withRoot';
import SearchAppBar from '../components/SearchAppBar';
import DashBoardContent from '../components/DashBoardContent';
import { actions } from '../../context';

const mapStateToProps = (store) => ({
  loginState: store.user.loginState,
  user: store.user.user,
  fetchedUser: store.user.fetchedUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (payload) => dispatch(actions.user.fetchAction(payload)),
  refreshLoggedUser: () => dispatch(actions.user.refreshLoggedUserAction()),
});

const styles = () => ({
  root: {

  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showedUserDataDto: null };
  }

  componentDidMount() {
    this.refreshShowedUserDatas();
  }

  componentDidUpdate() {
    this.refreshShowedUserDatas();
  }

  refreshShowedUserDatas() {
    const {
      user, loginState, isMyProfile, fetchedUser,
    } = this.props;
    const { refreshLoggedUser, fetchUser } = this.props;
    const { match } = this.props;
    if (!user && loginState !== 'FAILED') {
      refreshLoggedUser();
      return;
    }
    if (isMyProfile) {
      if (this.state.showedUserDataDto === user) { return; }
      this.setState({ showedUserDataDto: user });
      return;
    }
    if (!fetchedUser) {
      const { username } = match.params;
      fetchUser({ userId: username });
    }
    if (this.state.showedUserDataDto === fetchedUser) { return; }
    this.setState({ showedUserDataDto: fetchedUser });
  }

  render() {
    const { classes } = this.props;
    const { user, loginState, isMyProfile } = this.props;
    const { showedUserDataDto } = this.state;
    if (isMyProfile && !user && loginState === 'FAILED') {
      return <Redirect to="/login" />;
    }
    if (!showedUserDataDto) { return (''); }
    return (
      <div className={classes.root}>
        <SearchAppBar />
        <DashBoardContent showedUserDataDto={showedUserDataDto} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(Dashboard)));
