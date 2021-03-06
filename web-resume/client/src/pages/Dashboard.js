import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import SearchAppBar from '../components/appBar';
import DashBoardContent from '../components/DashBoardContent';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchAction, refreshLoggedUserAction } from "../actions/userActions";

const mapStateToProps = store => ({
    loginState: store.loginState,
    user: store.user,
    fetchedUser: store.fetchedUser
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (payload) => dispatch(fetchAction(payload)),
    refreshLoggedUser: () => dispatch(refreshLoggedUserAction())
});

const styles = () => ({
    root: {

    },
});

class Dashboard extends React.Component {
    state = {
    };
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
        if (!this.props.user && this.props.loginState !== "FAILED")
        {
            this.props.refreshLoggedUser();
            return;
        }
        if (this.props.isMyProfile) {
            if (this.state.showedUserDataDto === this.props.user)
                return;
            this.setState({ showedUserDataDto: this.props.user })
            return;
        }
        if (!this.props.fetchedUser) {
            const { username } = this.props.match.params;
            this.props.fetchUser({ userId: username });
        }
        if (this.state.showedUserDataDto === this.props.fetchedUser)
            return
        this.setState({ showedUserDataDto: this.props.fetchedUser })
    }

    render() {
        const { classes } = this.props;
        if (this.props.isMyProfile && !this.props.user && this.props.loginState === "FAILED") {
            return <Redirect to='/login' />
        }
        if (!this.state.showedUserDataDto)
            return ("");
        return (
            <div className={classes.root}>
                <SearchAppBar />
                <DashBoardContent showedUserDataDto={this.state.showedUserDataDto} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRoot(withStyles(styles)(Dashboard)));
