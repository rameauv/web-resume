import React from 'react';
import SearchList from './SearchList';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

type Item = {
  firstname: string,
  lastname: string,
  profileImageUrl: string,
}

const searchContent = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs />
        <Grid item xs={12} lg={6}>
          <SearchList results={[{
            firstname: 'valentin',
            lastname: 'rameau',
            profileImageUrl: 'url1',
          }, {
            firstname: 'jean',
            lastname: 'luc',
            profileImageUrl: 'url2',
          }]} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};

export default searchContent;
