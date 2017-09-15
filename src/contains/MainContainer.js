import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Header, Navigate, MainWrapper, Main } from '../components';
import { LoginContainer } from './';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawer: true,
            Header: '',
        };
    }

    handleDrawerOpen = () => {
        this.setState({ isDrawer: true });
    }

    handleDrawerClose = () => {
        this.setState({ isDrawer: false });
    }

    render() {
        return (
            <MainWrapper>
                <Header isDrawer={this.state.isDrawer} handleDrawerOpen={this.handleDrawerOpen}/>
                <Navigate isDrawer={this.state.isDrawer} handleDrawerClose={this.handleDrawerClose}/>
                <Main isDrawer={this.state.isDrawer}/>
                <Route path="/login" component={LoginContainer} />
            </MainWrapper>
        );
    }
}

export default MainContainer;