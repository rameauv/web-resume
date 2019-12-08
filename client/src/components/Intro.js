import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export class IntroDatas {
    title;
    firstname;
    lastname;
    profilePicture;
    contact;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bigAvatar: {
        margin: "auto",
        width: 150,
        height: 150,
    },
    profilePicture: {
        marginBottom: 50
    },
    panel: {
        paddingLeft:50,
        paddingRight:50,
    }
});

class IntroComponent extends React.Component {
    render() {
        const { classes, introDatas } = this.props;
        if (introDatas === null)
            return ("");
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div className={classes.profilePicture}>
                        <Avatar alt="Remy Sharp" src={introDatas.profilePicture} className={classes.bigAvatar} />
                    </div>
                    <Grid container className={classes.panel}>
                        <Grid item xl={8}>
                            <Typography
                                className={classes.nameText}
                                variant="h4"
                            >
                                {introDatas.firstname} {introDatas.lastname}
                            </Typography>
                            <Typography
                                className={classes.titleText}
                                variant="subtitle1"
                            >
                                {introDatas.title}
                                </Typography>
                                <Typography
                                className={classes.addressText}
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {introDatas.contact.address}
                                </Typography>
                        </Grid>
                        <Grid item xl>
  
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

IntroComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    introDatas: PropTypes.instanceOf(IntroDatas).isRequired,
};

export const Intro = withStyles(styles)(IntroComponent);