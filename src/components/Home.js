import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import GlobalNav from 'components/GlobalNav';
import Header from 'components/Header';
import Main from 'components/Main';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    frame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });    
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <div className={classes.frame}>
                    <Header open={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
                    <GlobalNav open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
                    <Main open={this.state.open} />
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);