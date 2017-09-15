import React, { Component } from 'react';

import { LoginWrapper, Login } from '../components';

class LoginContainer extends Component {
    render() {   
        return (
            <LoginWrapper>
                <Login/>
            </LoginWrapper>
        );
    }
}

export default LoginContainer;