import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SearchList from './SearchList';
import { Item } from './Item';

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

type Props = {
  results: Array<Item>
}

const SearchContent: React.FunctionComponent<Props> = (props: Props) => {
  const classes = styles();
  const { results } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs />
        <Grid item xs={12} lg={6}>
          <SearchList results={results} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
};

export default SearchContent;
