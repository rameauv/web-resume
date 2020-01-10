import React from 'react';
import { makeStyles } from '@material-ui/styles/';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';
import { WorkingExperienceDto } from '../../repositories/apiRepository/apiDtos';

const styles = makeStyles(() => ({
  AvatarContainer: {
    alignSelf: 'start',
    marginRight: 20,
  },
  bigAvatar: {
    margin: 'auto',
    width: 60,
    height: 60,
  },
}));

const WorkingExperience = (props) => {
  const getDateText = (dateString) => {
    const date = Date.parse(dateString);
    return (new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
    }).format(date));
  };
  const { workingExperience } = props;
  const classes = styles();
  if (!workingExperience) {
    return (<div data-test="NoProps" />);
  }

  return (
    <>
      <div className={classes.AvatarContainer}>
        <Avatar className={classes.bigAvatar} src={workingExperience.imageUrl} data-test="Picture">
          <ImageIcon />
        </Avatar>
      </div>
      <div>
        <div>
          <Typography
            variant="subtitle1"
            data-test="Title"
          >
            {workingExperience.title}
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            data-test="Company"
          >
            {workingExperience.companny}
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            data-test="Dates"
          >
            {getDateText(workingExperience.startingDate)} – {getDateText(workingExperience.endingDate)}
          </Typography>
        </div>
        <div>
          <Typography
            variant="subtitle1"
            data-test="Address"
          >
            {workingExperience.address}
          </Typography>
        </div>
      </div>
    </>
  );
};

WorkingExperience.propTypes = {
  workingExperience: PropTypes.instanceOf(WorkingExperienceDto),
};

export default WorkingExperience;
