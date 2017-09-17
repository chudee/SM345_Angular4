import React, { Component } from 'react';

import { DashboardWrapper, Dashboard } from '../components';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '대시보드'
        }
    }
    render() {
        return (
            <DashboardWrapper>
                <Dashboard 
                    title={this.state.title}
                    isDrawer={this.props.isDrawer}
                    handleDrawerOpen={this.props.handleDrawerOpen}
                />
            </DashboardWrapper>
        );
    }
}

export default DashboardContainer;