/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import SearchItem from './SearchItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(() => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: 'white',
  },
}));

type Item = {
  firstname: string,
  lastname: string,
  profileImageUrl: string,
}

type Props = {
  results: Array<Item>,
};

const searchList: React.FunctionComponent<Props> = (props: Props) => {
  const { results } = props;
  const classes = styles();
  const len = 2;
  return (
    <Paper>
      <List className={classes.root}>
        {
          results.map((item: Item, index: number) => (
            <>
              <ListItem>
                <SearchItem
                  firstname={item.firstname}
                  lastname={item.lastname}
                  profileImageUrl={item.profileImageUrl}
                  key={index}
                />
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

searchList.defaultProps = {
  results: [],
};

export default searchList;
