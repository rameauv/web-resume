import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import SearchAppBar from '../components/SearchAppBar';
import LoginContent from '../components/loginContent';

const styles = () => ({
  root: {

  },
});

class Login extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SearchAppBar />
        <LoginContent />
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Login));
