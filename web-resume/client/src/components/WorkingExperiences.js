
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    bigAvatar: {
        margin: "auto",
        width: 60,
        height: 60,
    },
    AvatarContainer: {
        alignSelf: "start",
        marginRight: 20,
    }
});

class WorkingExeriences extends React.Component {

    getDateText(dateString) {
        const date = Date.parse(dateString);
        return (new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long'
        }).format(date));
    }



    getWorkingexperiencesDom(workingExperiences, classes) {
        const len = workingExperiences.length;
        return (workingExperiences.map((item, index) => {
            return (
                <div key={index}>
                    <ListItem className={classes.workingExperienceItem}>
                        <div className={classes.AvatarContainer}>
                            <Avatar className={classes.bigAvatar} src={item.imageUrl}>
                                <ImageIcon />
                            </Avatar>
                        </div>
                        <div>
                            <div>
                                <Typography
                                    className={classes.nameText}
                                    variant="subtitle1"
                                >
                                    {item.title}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    className={classes.nameText}
                                    variant="subtitle1"
                                >
                                    {item.companny}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    className={classes.nameText}
                                    variant="subtitle1"
                                >
                                    {this.getDateText(item.startingDate)} – {this.getDateText(item.endingDate)}
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    className={classes.nameText}
                                    variant="subtitle1"
                                >
                                    {item.address}
                                </Typography>
                            </div>
                        </div>
                    </ListItem>
                    {index + 1 < len &&
                        <li className={classes.separator}>
                            <Divider variant="inset" />
                        </li>
                    }
                </div>
            );
        }));
    }

    render() {
        const { classes, workingExperiences } = this.props;
        if (workingExperiences === null)
            return ("");
        const workingExperiencesDom = this.getWorkingexperiencesDom(workingExperiences, classes);
        return (
            <Paper className={classes.paper}>
                <List className={classes.root}>
                    {workingExperiencesDom}
                </List>
            </Paper>
        );
    }
}

WorkingExeriences.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkingExeriences);