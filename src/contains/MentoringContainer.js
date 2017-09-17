import React, { Component } from 'react';

import { MentoringWrapper, Mentoring } from '../components';

class MentoringContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '멘토링'
        }
    }
    render() {
        return (
            <MentoringWrapper>
                <Mentoring 
                    title={this.state.title}
                    isDrawer={this.props.isDrawer}
                    handleDrawerOpen={this.props.handleDrawerOpen}  
                />
            </MentoringWrapper>
        );
    }
}

export default MentoringContainer;