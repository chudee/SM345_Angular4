import React, { Component } from 'react';

import { DashboardWrapper, Dashboard } from '../components';

class DashboardContainer extends Component {
    render() {
        return (
            <DashboardWrapper>
                <Dashboard />
            </DashboardWrapper>
        );
    }
}

export default DashboardContainer;