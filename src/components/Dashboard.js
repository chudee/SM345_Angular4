import React, { Component } from 'react';
import Styled from 'styled-components';
import Grid from 'material-ui/Grid';

import { EventAvailable, Assignment, Pageview, Schedule, Folder } from 'material-ui-icons';

import BoardSchedule from 'components/Board/BoardSchedule';
import BoardNotice from 'components/Board/BoardNotice';
import BoardCalender from 'components/Board/BoardCalender';
import BoardManual from 'components/Board/BoardManual';
import BoardMentorRoom from 'components/Board/BoardMentorRoom';

const Styles = Styled.div`
    > div {
        > div {
            > div {
                > div {
                    margin-top: 20px; 
                }
                > div:nth-child(2) {
                    padding: 0;
                    margin-top: 0;
                }
            }
        }
    }
`;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: [
                { 
                    schedule: {
                        name: 'BoardShedule',
                        header: {
                            title: 'Schedule',
                            avatar: <Schedule/>,
                        },
                        contents: [
                            {
                                title: '2학년 멘토 신청기간',
                                date: '2017-08-30 ~ 09-10',
                            },
                            {
                                title: '2학년 멘티 신청기간',
                                date: '2017-09-11 ~ 09-20',
                            },
                            {
                                title: '멘토링 활동기간',
                                date: '2017-09-21 ~ 12-10',
                            },
                            {
                                title: '2학기 설문조사 기간',
                                date: '2017-12-11 ~ 12-20',
                            },
                        ],
                    },
                },
                {
                    notice: {
                        name: 'BoardNotice',
                        header: {
                            title: 'Notice',
                            avatar: <Assignment/>,
                        },
                        contents: [
                            {
                                title: '2학년 멘토 신청방법 및 유의사항 안내',
                                date: '2017-08-30 14:30',
                            },
                            {
                                title: '2학년 멘티 신청방법 및 유의사항 안내',
                                date: '2017-08-30 14:30',
                            },
                            {
                                title: '2017년 2학기 멘토 장학금 안내',
                                date: '2017-09-01 14:30',
                            },
                            {
                                title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내 멘티 설문조사 방법 안내 반드시 필독',
                                date: '2017-09-03 14:30',
                            },
                            {
                                title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
                                date: '2017-09-03 14:30',
                            },
                        ],
                    },
                },
                {
                    calender: {
                        name: 'BoardCalender',
                        header: {
                            title: 'Calender',
                            avatar: <EventAvailable/>,
                        },
                        contents: [
                            {
                                title: 'calender',
                                date: '1234'
                            },
                        ],
                    },
                },
                {  
                    manual: {
                        name: 'BoardManual',
                        header: {
                            title: 'Manual',
                            avatar: <Pageview/>,
                        },
                        contents: [
                            {
                                title: 'manual',
                                date: '123'
                            },
                        ],
                    },
                },
                {
                    mentorRoom: {
                        header: {
                            title: 'Mentor Room',
                            avatar: <Folder/>,
                        },
                        contents: [
                            {
                                title: 'mentor',
                                date: '123'
                            },
                        ],
                    },
                },
            ],
        };
    }

    render() {
        return (
            <Styles>
                <Grid container spacing={24}>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <BoardSchedule contentData={this.state.contentData[0].schedule}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <BoardNotice contentData={this.state.contentData[1].notice}/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <BoardManual contentData={this.state.contentData[3].manual}/>
                    </Grid>
                    {/* <Grid item lg={12} md={12} sm={12} xs={12}>
                        <BoardCalender contentData={this.state.contentData[2].calender}/>
                    </Grid> */}
                    <Grid item xs={12}>
                        <BoardMentorRoom contentData={this.state.contentData[4].mentorRoom}/>
                    </Grid>
                </Grid>
            </Styles>
        );
    }
}

export default Dashboard;