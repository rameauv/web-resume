import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from './Profile';

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

function dashBoardContent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs />
        <Grid item xs={12} lg={6}>
          <Profile showedUserDataDto={props.showedUserDataDto} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

dashBoardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(dashBoardContent);
