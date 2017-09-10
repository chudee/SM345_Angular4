import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { Typography } from 'material-ui';

import Dashboard from 'components/Dashboard';

const styles = theme => ({
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
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
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

class Main extends Component {
    render() {
        const classes = this.props.classes;

        return (
            <main className={classNames(classes.content, this.props.open && classes.contentShift)}>
                <Dashboard/>
            </main>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main);