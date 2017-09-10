import React, { Component } from 'react';
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

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: undefined,
            open: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleClick = e => {
        this.setState({
            open: true,
            anchorEl: e.currentTarget
        });
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        const classes = this.props.classes;
        const Custom = styled.div`
            > div {
                > div {
                    > span {
                        color: #fff;
                    }
                }
            }
        `;

        return (
            <Card className={classes.Card}>
                <Custom>
                    <CardHeader 
                        avatar={ 
                            <Avatar aria-label="Recipe" alt="user" className={classes.Avatar}>
                                <Face className={classes.Icon} />
                            </Avatar>
                        }
                        title="홍길동"
                        subheader="201500000"
                    />
                    <IconButton
                        className={classNames(classes.open, !this.props.open && classes.hide)}
                        onClick={this.props.handleDrawerClose}
                    >
                        <KeyboardArrowLeft />
                    </IconButton>
                </Custom>
                <CardActions className={classNames({position: 'relative'}, !this.props.open && classes.hide)}>
                    <Badge className={classes.badge} badgeContent={4} color="primary">
                        <Mail />
                    </Badge>
                    <IconButton 
                        aria-owns={this.state.open ? 'simple-mune' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        aria-label="MyPage" 
                        className={classes.IconButton}
                    >
                        <Apps />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={this.state.open}
                        onRequestClose={this.handleRequestClose}
                    >
                        <MenuItem onClick={this.handleRequestClose}>내 정보</MenuItem>
                        <MenuItem onClick={this.handleRequestClose}>비밀번호 변경</MenuItem>
                        <MenuItem onClick={this.handleRequestClose}>로그아웃</MenuItem>
                    </Menu>
                </CardActions>
            </Card>
        );
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(User);