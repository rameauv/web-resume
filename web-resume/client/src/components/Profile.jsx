import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Intro, IntroDatas } from './Intro';
import WorkingExperiences from './workingExperiences';
import Competences from './competences';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  profileItem: {
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    margin: "auto",
    width: 100,
    height: 100,
  },
});

class Profile extends React.Component {
  render() {
    const { classes, showedUserDataDto } = this.props;
    var introDatas = new IntroDatas();
    introDatas.title = showedUserDataDto.resumeTitle;
    const { competences, contact, workingExperiences } = showedUserDataDto.resume;
    introDatas.contact = contact;
    introDatas.firstname = showedUserDataDto.firstname;
    introDatas.lastname = showedUserDataDto.lastname;
    introDatas.profilePicture = showedUserDataDto.profilePicture;
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.profileItem}>
              <Intro className={classes.profileItem} introDatas={introDatas}>xs=12</Intro>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.profileItem}>
              <WorkingExperiences className={classes.WorkingExperiences} workingExperiences={workingExperiences}>xs=12</WorkingExperiences>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.profileItem}>
              <Competences className={classes.Competences} competencesDto={competences}>xs=12</Competences>
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid> */}
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
