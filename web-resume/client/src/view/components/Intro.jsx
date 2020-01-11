import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export class IntroDatas {
    title;

    firstname;

    lastname;

    profilePicture;
}

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: 'auto',
    width: 150,
    height: 150,
  },
  profilePicture: {
    marginBottom: 50,
  },
  panel: {
    paddingLeft: 50,
    paddingRight: 50,
  },
}));

const intro = (props) => {
  const { introDatas } = props;
  const classes = styles();
  if (introDatas === null) { return (''); }
  return (
    <div className={classes.root} data-test="IntroComponent">
      <Paper className={classes.paper}>
        <div className={classes.profilePicture}>
          <Avatar alt="Remy Sharp" src={introDatas.profilePicture} className={classes.bigAvatar} data-test="ProfilePicture" />
        </div>
        <Grid container className={classes.panel}>
          <Grid item xl={8}>
            <Typography
              className="nameText"
              variant="h4"
              data-test="Name"
            >
              {introDatas.firstname}
              {' '}
              {introDatas.lastname}
            </Typography>
            <Typography
              className="titleText"
              variant="subtitle1"
              data-test="Title"
            >
              {introDatas.title}
            </Typography>
            <Typography
              className="addressText"
              variant="subtitle1"
              color="textSecondary"
              data-test="Address"
            >
              {introDatas.contact.address}
            </Typography>
          </Grid>
          <Grid item xl />
        </Grid>
      </Paper>
    </div>
  );
};

intro.propTypes = {
  introDatas: PropTypes.instanceOf(IntroDatas).isRequired,
};

export default intro;
// export const Intro = withStyles(styles)(IntroComponent);
