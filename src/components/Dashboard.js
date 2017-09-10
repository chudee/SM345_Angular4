import React, { Component } from 'react';

import { EventAvailable, Assignment, Pageview } from 'material-ui-icons';

import Board from 'components/Board/Board';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentData: {
                manual: {
                    header: {
                        title: 'Manual',
                        avatar: <Pageview/>,
                    },
                    content: {
                        name: 'manual'
                    },
                },
                calender: {
                    header: {
                        title: 'Calender',
                        avatar: <EventAvailable/>,
                    },
                    content: {
                        name: 'calender'
                    },
                },
                notice: {
                    header: {
                        title: 'Notice',
                        avatar: <Assignment/>,
                    },
                    content: {
                        name: 'notice'
                    },
                },
            },
        };
    }

    render() {
        return (
            <div>
                <Board contentData={this.state.contentData.manual}/>
                <Board contentData={this.state.contentData.calender}/>
                <Board contentData={this.state.contentData.notice}/>
            </div>
        );
    }
}

export default Dashboard;