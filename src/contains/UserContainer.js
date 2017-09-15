import React, { Component } from 'react';

import { UserWrapper, User } from '../components';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null
        }
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
        return (
            <UserWrapper>
                <User
                    isDrawer={this.props.isDrawer}
                    handleDrawerClose={this.props.handleDrawerClose}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    handleClick={this.handleClick}
                    handleRequestClose={this.handleRequestClose}
                />
            </UserWrapper>
        );
    }
}

export default UserContainer;