import React, { Component } from 'react';

import { ManualWrapper, Manual } from '../components';

class ManualContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '설명소개서'
        }
    }
    render() {
        return (
            <ManualWrapper>
                <Manual 
                    title={this.state.title}
                    isDrawer={this.props.isDrawer}
                    handleDrawerOpen={this.props.handleDrawerOpen}
                />
            </ManualWrapper>
        );
    }
}

export default ManualContainer;