import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Route } from 'react-router-dom';

import { 
    DashboardContainer, 
    ManualContainer, 
    NoticeContainer, 
    MentoringContainer, 
    QuestionContainer,
    AdminContainer
} from '../../contains';

const styles = theme => ({
    content: {
        width: `calc(100% - 72px)`,
        marginLeft: 72,
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        backgroundColor: 'darkturquoise',
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

const Main = ({ classes, isDrawer }) => {
    return (
        <div className={classNames(classes.content, isDrawer && classes.contentShift)}>
            {/* <Route exact path="/" component={DashboardContainer} /> */}
            <Route path="/" />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route path="/manual" component={ManualContainer} />
            <Route path="/notice" component={NoticeContainer} />
            <Route path="/mentoring" component={MentoringContainer} />
            <Route path="/question" component={QuestionContainer} />
            <Route path="/admin" component={AdminContainer} />
        </div>
    );
}


Main.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main);
