import React, { Component } from 'react';

import { NoticeWrapper, Notice } from '../components';

class NoticeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: '2학년 멘토 신청방법 및 유의사항 안내',
                    date: '2017-08-30 14:30',
                    content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
                },
                {
                    id: 2,
                    title: '2학년 멘티 신청방법 및 유의사항 안내',
                    date: '2017-08-30 14:30',
                    content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
                },
                {
                    id: 3,
                    title: '2017년 2학기 멘토 장학금 안내',
                    date: '2017-09-01 14:30',
                    content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
                },
                {
                    id: 4,
                    title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내 멘티 설문조사 방법 안내 반드시 필독',
                    date: '2017-09-03 14:30',
                    content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
                },
                {
                    id: 5,
                    title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
                    date: '2017-09-03 14:30',
                    content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
                },
            ],
            expanded: false,
            keyword: '',
        };
    }


    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

  
    render() {
        return (
            <NoticeWrapper>
                <Notice 
                    data={this.state.data}
                    handleExpandClick={this.handleExpandClick}
                    expanded={this.state.expanded}
                />
            </NoticeWrapper>
        );
    }
}

export default NoticeContainer;