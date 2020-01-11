import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Competence from './Competence';
import CompetencesDto from '../../repositories/user/dto/CompetenceDto';

const styles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    padding: 10,
  },
}));

const competences = (props) => {
  const { competencesDto } = props;
  const classes = styles();
  if (!competencesDto) {
    return ('');
  }
  return (
    <div className={classes.root} data-test="CompetencesComponent">
      <Paper className={classes.paper}>
        <Grid container className={classes.mainContainer}>
          {
            competencesDto.map((item, index) => (
              <Competence title={item.title} rate={item.rate} key={index} />
            ))
          }
        </Grid>
      </Paper>
    </div>
  );
};

competences.propTypes = {
  competencesDto: PropTypes.instanceOf(CompetencesDto).isRequired,
};

export default competences;
