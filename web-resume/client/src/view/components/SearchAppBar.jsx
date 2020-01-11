import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { actions } from '../../context';

const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 2,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
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
    pointerEvents: 'none',
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
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    paddingLeft: theme.spacing(),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    paddingLeft: theme.spacing(),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
    borderStyle: 'solid',
    borderWidth: 'thin',
    width: 50,
    height: 50,
    cursor: 'pointer',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    cursor: 'pointer',
  },
  loginLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
});
const mapStateToProps = (store) => ({
  user: store.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (payload) => dispatch(actions.user.loginAction(payload)),
  logoutAction: () => dispatch(actions.user.logoutAction()),
});

class SearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.open = false;
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
    this.open = true;
  }

  handleClose() {
    this.setState({ anchorEl: null });
    this.open = false;
  }

  handleLogout() {
    const { logoutAction } = this.props;
    logoutAction();
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    const userDatas = this.props.user;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Web-Resume
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            {userDatas ? (
              <>
                <div className={classes.sectionDesktop}>
                  <Avatar alt="Remy Sharp" src={userDatas.profilePicture} className={classes.avatar} onClick={this.handleMenu} />
                </div>
                <div className={classes.sectionMobile}>
                  <Avatar alt="Remy Sharp" src={userDatas.profilePicture} className={classes.avatar} onClick={this.handleMenu} />
                </div>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                  <MenuItem>
                    <Link to="/">
                      MyPage
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <div className={classes.sectionDesktop}>
                  <Link to="/login" className={classes.loginLink}>
                    <Typography variant="h6" color="inherit" noWrap>
                    Sign in
                    </Typography>
                  </Link>
                </div>
                <div className={classes.sectionMobile}>
                  <Link to="/login" className={classes.loginLink}>
                    <Typography variant="h6" color="inherit" noWrap>
                    Sign in
                    </Typography>
                  </Link>
                </div>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchAppBar));
