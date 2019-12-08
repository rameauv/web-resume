import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as UserActions from '../actions/userActions';

const mapStateToProps = store => ({
    loginState: store.loginState,
    user: store.user,
});

const mapDispatchToProps = dispatch => ({
    loginAction: (payload) => dispatch(UserActions.loginAction(payload)),
    refreshLoggedUser: () => dispatch(UserActions.refreshLoggedUserAction())
});

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class CenteredGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", loginSuccess: false };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    checkLoginSuccess(responseContent) {
        return responseContent.success;
    }

    handleClick = (async () => {
        this.props.loginAction({username:this.state.username, password:this.state.password});
    })

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        const { classes } = this.props;
        if (this.props.loginState === "NO")
            this.props.refreshLoggedUser();
        if (this.props.loginState === "SUCCESS") {
            return <Redirect to='/' />
        }
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}></Paper>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                            <Button
                                href='#'
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleClick}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/* <Link href="#" variant="body2"> */}
                                        {/* Forgot password? */}
                                    {/* </Link> */}
                                </Grid>
                                <Grid item>
                                    {/* <Link href="#" variant="body2"> */}
                                        {/* {"Don't have an account? Sign Up"} */}
                                    {/* </Link> */}
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CenteredGrid));