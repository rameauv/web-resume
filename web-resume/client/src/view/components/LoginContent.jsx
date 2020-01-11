import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { actions } from '../../context';

const mapStateToProps = (store) => ({
  loginState: store.user.loginState,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(actions.user.loginAction(payload)),
  refreshLoggedUser: () => dispatch(actions.user.refreshLoggedUserAction()),
});

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const loginContent = (props) => {
  const {
    loginAction,
    refreshLoggedUser,
    loginState,
    classes,
  } = props;

  console.log(loginState);
  const handleLogin = (credentials) => {
    loginAction(credentials);
  };

  if (loginState === 'NO') {
    refreshLoggedUser();
  }
  if (loginState === 'SUCCESS') {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs />
        <Grid item xs={12} lg={6}>
          <LoginForm emitEvent={handleLogin} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};

loginContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  refreshLoggedUser: PropTypes.func.isRequired,
  loginState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(loginContent));
