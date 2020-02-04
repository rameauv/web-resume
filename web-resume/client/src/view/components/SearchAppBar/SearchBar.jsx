/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';

const styles = (theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    // pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
    //   '&:focus': {
    //     width: 200,
    //   },
    // },
  },
});

type Props = {
  currentQuery: string
}

interface State {
  query: string,
  validate: bool,
}

class SearchBar extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { currentQuery } = props;
    this.state = {
      query: currentQuery,
      validate: false,
    };
    this.open = false;
  }

  validate = (value: bool) => {
    const { query } = this.state;
    if (!query) {
      return;
    }
    this.setState({ validate: value });
  }

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.validate(true);
    }
  }

  onValidate = () => {
    this.validate(true);
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  render() {
    const { classes } = this.props;
    const { query, validate } = this.state;
    if (validate) {
      this.validate(false);
      return <Redirect to={`/search/${query}`} />;
    }
    return (
      <>
        <div className={classes.search}>
          <InputBase
            defaultValue={query}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
        </div>
        <IconButton aria-label="search" color="inherit" onClick={this.onValidate}>
          <SearchIcon />
        </IconButton>
      </>
    );
  }
}

SearchBar.defaultProps = {
  currentQuery: '',
};

export default (withStyles(styles)(SearchBar));
