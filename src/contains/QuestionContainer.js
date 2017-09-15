import React, { Component } from 'react';

import { QuestionWrapper, Question } from '../components';

class QuestionContainer extends Component {
    render() {
        return (
            <QuestionWrapper>
                <Question />
            </QuestionWrapper>
        );
    }
}

export default QuestionContainer;