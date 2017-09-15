import React from 'react';
import classNames from 'classnames';
import { Drawer, MenuList, MenuItem, Typography } from 'material-ui';
import { Info, GroupWork, Settings, Help, Dashboard, QuestionAnswer } from 'material-ui-icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { UserContainer } from '../../contains';

const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        height: '100%',
        width: 240,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderRight: '1px solid rgba(0, 0, 0, 0.7) !important',
    },
    drawerPaperClose: {
        width: 72,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderRight: '1px solid rgba(0, 0, 0, 0.7) !important',
    },
    drawerInner: {
        backgroundColor: '#37474f',
        width: 240,
        height: '100%',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 0,
        height: 150,
        // [theme.breakpoints.up('sm')]: {
        //     height: 150,
        // },
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerHeaderClose: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 0,
        height: 90,
        // [theme.breakpoints.up('sm')]: {
        //     height: 90,
        // },
        transition: theme.transitions.create('height', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    item: {
        margin: '20px 0',
        '&:hover': {
            backgroundColor: '#00BCD4',
            color: '#37474F',
        }
    },
    typo: {
        fontWeight: 500,
        color: 'rgba(255,255,255,0.56)',
    },
    icon: {
        color: '#78909c',
        marginLeft: 8,
        marginRight: 36,
    },
    link: {
        textDecoration: 'none',
    }
});

const Navigate = ({ isDrawer, handleDrawerClose, classes }) => {
    return (
        <Drawer
            type="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !isDrawer && classes.drawerPaperClose),
            }}
            open={isDrawer}
        >
            <div className={classes.drawerInner}>
                <div className={classNames(classes.drawerHeader, !isDrawer && classes.drawerHeaderClose)}>
                    <UserContainer handleDrawerClose={handleDrawerClose} isDrawer={isDrawer}/>
                </div>
                <MenuList className={classes.list}>
                    <Link to='/dashboard' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <Dashboard className={classes.icon} />
                            <Typography className={classes.typo}> 대시보드 </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/manual' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <Help className={classes.icon} />
                            <Typography className={classes.typo}> 설명소개서 </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/notice' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <Info className={classes.icon} />
                            <Typography className={classes.typo}> 공지사항 </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/mentoring' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <GroupWork className={classes.icon} />
                            <Typography className={classes.typo}> 멘토방 </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/question' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <QuestionAnswer className={classes.icon} />
                            <Typography className={classes.typo}> 질문게시판 </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/admin' className={classes.link}>
                        <MenuItem className={classes.item}>
                            <Settings className={classes.icon} />
                            <Typography className={classes.typo}> 관리페이지 </Typography>
                        </MenuItem>
                    </Link>
                </MenuList>
            </div>
        </Drawer>
    );
};

Navigate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigate);