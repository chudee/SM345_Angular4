import React, { Component } from 'react';

import { AdminWrapper, Admin } from '../components';

class AdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '관리자'
        }
    }
    render() {
        return (
            <AdminWrapper>
                <Admin 
                    title={this.state.title}
                    isDrawer={this.props.isDrawer}
                    handleDrawerOpen={this.props.handleDrawerOpen}
                />
            </AdminWrapper>
        );
    }
}

export default AdminContainer;