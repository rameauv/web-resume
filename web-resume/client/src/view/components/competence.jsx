import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(() => ({
  competenceContainer: {
    padding: 10,
    paddingRight: 20,
  },
  competenceRate: {
    alignSelf: 'center',
  },
}));

const competence = (props) => {
  const { title, rate } = props;
  const classes = styles();
  if (!title || !rate) {
    return ('');
  }
  return (
    <Grid item xs={12} lg={6} data-test="CompetenceComponent">
      <Grid container className={classes.competenceContainer}>
        <Grid item xs>
          <Typography
            variant="subtitle1"
            data-test="title"
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs className={classes.competenceRate}>
          <LinearProgress data-test="rate" variant="determinate" value={rate} />
        </Grid>
      </Grid>
    </Grid>
  );
};

competence.propTypes = {
  rate: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default competence;
