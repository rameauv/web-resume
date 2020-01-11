import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import SearchAppBar from '../components/SearchAppBar';
import LoginContent from '../components/LoginContent';

const styles = () => ({
  root: {

  },
});

const Login = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SearchAppBar />
      <LoginContent />
    </div>
  );
};

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Login));
