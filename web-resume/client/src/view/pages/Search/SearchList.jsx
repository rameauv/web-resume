/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import SearchItem from './SearchItem';
import { Item } from './Item';


const styles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
  },
}));

type Props = {
  results: Array<Item>,
};

const searchList: React.FunctionComponent<Props> = (props: Props) => {
  const { results } = props;
  const classes = styles();
  const len = results.length;
  console.log(results);

  return (
    <Paper>
      <List className={classes.root}>
        {
          results.map((item: Item, index: number) => (
            <>
              <ListItem>
                <SearchItem
                  firstname={item.Firstname}
                  lastname={item.Lastname}
                  userid={item.Userid}
                  profileImageUrl={item.profileImageUrl}
                  key={item.Userid}
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

export default searchList;
