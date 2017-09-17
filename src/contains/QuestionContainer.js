import React, { Component } from 'react';

import { QuestionWrapper, Question } from '../components';

class QuestionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '질문게시판'
        }
    }
    render() {
        return (
            <QuestionWrapper>
                <Question 
                    title={this.state.title}
                    isDrawer={this.props.isDrawer}
                    handleDrawerOpen={this.props.handleDrawerOpen}
                />
            </QuestionWrapper>
        );
    }
}

export default QuestionContainer;