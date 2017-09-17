import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import { Header, Navigate, MainWrapper, Main } from '../components';
import { LoginContainer } from './';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            isDrawer: true,
        };
    }

    handleDrawerOpen = () => {
        this.setState({ isDrawer: true });
    }

    handleDrawerClose = () => {
        this.setState({ isDrawer: false });
    }

    handleAuth = () => {
        this.setState({
            isAuthed: true
        });
    }

    render() {
        const Auth = ( 
            <MainWrapper>
                <Header
                    isDrawer={this.state.isDrawer} 
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Navigate 
                    isDrawer={this.state.isDrawer} 
                    handleDrawerClose={this.handleDrawerClose}
                />
                <Main 
                    isDrawer={this.state.isDrawer} 
                />
            </MainWrapper> 
        );

        const unAuth = (
            <MainWrapper>
                <LoginContainer handleAuth={this.handleAuth} />
            </MainWrapper>
        );

        return (
            this.state.isAuthed ? Auth : unAuth
        );
    }
}

export default MainContainer;