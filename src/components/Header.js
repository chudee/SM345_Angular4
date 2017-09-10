import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    appBar: {
        position: 'absolute',
        width: `calc(100% - 72px)`,
        marginLeft: 72,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
});

class Header extends Component {
    render() {
        const classes = this.props.classes;

        return (
            <AppBar className={classNames(classes.appBar, this.props.open && classes.appBarShift)}>
                <Toolbar disableGutters={!this.props.open}>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(classes.menuButton, this.props.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" noWrap>
                        대시보드
                    </Typography>
                </Toolbar>
            </AppBar> 
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);