import React, { Component } from 'react';

import { LoginWrapper, Login } from '../components';

class LoginContainer extends Component {
    render() {   
        return (
            <LoginWrapper>
                <Login handleAuth={this.props.handleAuth} />
            </LoginWrapper>
        );
    }
}

export default LoginContainer;