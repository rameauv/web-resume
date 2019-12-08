import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
    },
    mainContainer: {
        padding:10
    },
    competenceContainer: {
        padding:10,
        paddingRight:20,
    },
    competenceRate: {
        alignSelf: 'center'
    },
};

class Competences extends React.Component {
    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    render() {
        const { classes, competencesDto } = this.props;
        if (competencesDto === null)
            return ("");
        const competences = competencesDto;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container className={classes.mainContainer}>
                        {competences.map((item, index) => {
                            return (
                            <Grid item xs={12} lg={6} key={index}>
                                <Grid container className={classes.competenceContainer}>
                                    <Grid item xs className={classes.competenceTitle}>
                                        <Typography
                                                className={classes.nameText}
                                                variant="subtitle1"
                                            >
                                                {item.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs className={classes.competenceRate}>
                                        <LinearProgress variant="determinate" value={item.rate} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        );})
                        }
                    </Grid>
                </Paper>
            </div>
        );
    }
}

Competences.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Competences);