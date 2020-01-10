import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import { WorkingExperiencesDto } from '../../repositories/apiRepository/apiDtos';
import WorkingExperience from './workingExperience';

const styles = makeStyles(() => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: 'white',
  },
}));

const WorkingExperiences = (props) => {
  const { workingExperiences } = props;
  const classes = styles();
  if (!workingExperiences) {
    return ('');
  }
  const len = workingExperiences.length;
  return (
    <Paper className={classes.paper} data-test="WorkingExperiencesComponent">
      <List className={classes.root}>
        {
          workingExperiences.map((item, index) => (
            <>
              <ListItem>
                <WorkingExperience workingExperience={item} />
              </ListItem>
              {index + 1 < len && (
                <li className={classes.separator}>
                  <Divider variant="inset" />
                </li>
              )}
            </>
          ))
        }
      </List>
    </Paper>
  );
};

WorkingExperiences.propTypes = {
  workingExperiences: PropTypes.instanceOf(WorkingExperiencesDto),
};

export default WorkingExperiences;
