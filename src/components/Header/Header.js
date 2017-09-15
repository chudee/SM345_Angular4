import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    appBar: {
        width: 'calc(100% - 72px)',
        marginLeft: 72,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: 'calc(100% - 240px)',
        marginLeft: 240,
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

const Header = ({ classes, isDrawer, handleDrawerOpen }) => {
    return (
        <AppBar 
            className={classNames(classes.appBar, isDrawer && classes.appBarShift)}
            position='fixed'
        >
             <Toolbar disableGutters={!isDrawer}>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, isDrawer && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" noWrap>
                        대시보드
                    </Typography>
                </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);