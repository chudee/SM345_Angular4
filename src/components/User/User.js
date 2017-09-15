import React from 'react';
import styled from 'styled-components';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Avatar, IconButton, Badge } from 'material-ui';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { Apps, Mail, Face, KeyboardArrowLeft } from 'material-ui-icons';

const styles = theme => ({
    Card: {
        width: '100%',
        backgroundColor: '#263238',
        paddingTop: '30px',
    },
    Avatar: {
        width: '40px',
        height: '40px',
        backgroundColor: 'aqua',
    },
    Icon: {
        width: '40px',
        height: '40px',
        color: 'black',
    },
    Typo: {
        color: '#eceff1',
        fontSize: '1rem',
    },
    badge: {
        color: 'aqua',
        position: 'absolute',
        right: '75px',
    },
    IconButton: {
        color: 'aqua',
        position: 'absolute',
        right: '10px',
    },
    hide: {
        display: 'none',
    },
    open: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'aqua',
    }
});

const Custom = styled.div`
    > div {
        > div:nth-child(2) {
            > span {
                color: white;
            }
        }
    }
`;

const User = ({ classes, isDrawer, handleDrawerClose, open, anchorEl, handleClick, handleRequestClose }) => {
    return (
        <Card className={classes.Card}>
            <Custom>
                <CardHeader
                    className={classes.CardHeader}
                    avatar={ 
                        <Avatar aria-label="Recipe" alt="user" className={classes.Avatar}>
                            <Face className={classes.Icon} />
                        </Avatar>
                    }
                    title="홍길동"
                    subheader="201500000"
                />
                <IconButton
                    className={classNames(classes.open, !isDrawer && classes.hide)}
                    onClick={handleDrawerClose}
                >
                    <KeyboardArrowLeft />
                </IconButton>
            </Custom>
            <CardActions className={classNames({position: 'relative'}, !isDrawer && classes.hide)}>
                <Badge className={classes.badge} badgeContent={4} color="primary">
                    <Mail />
                </Badge>
                <IconButton 
                    aria-owns={open ? 'simple-mune' : null}
                    aria-haspopup="true"
                    onClick={handleClick}
                    aria-label="MyPage" 
                    className={classes.IconButton}
                >
                    <Apps />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onRequestClose={handleRequestClose}
                >
                    <MenuItem onClick={handleRequestClose}>내 정보</MenuItem>
                    <MenuItem onClick={handleRequestClose}>비밀번호 변경</MenuItem>
                    <MenuItem onClick={handleRequestClose}>로그아웃</MenuItem>
                </Menu>
            </CardActions>
        </Card>
    );
};

User.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(User);