import React, { Component } from 'react';

import { NoticeWrapper, Notice } from '../components';

class NoticeContainer extends Component {
    render() {
        return (
            <NoticeWrapper>
                <Notice/>
            </NoticeWrapper>
        );
    }
}

export default NoticeContainer;