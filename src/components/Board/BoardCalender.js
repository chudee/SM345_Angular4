import React, { Component } from 'react';
import Styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import List from 'material-ui/List';

import BoardHeader from 'components/Board/BoardHeader';
import BoardContent from 'components/Board/BoardContent';

const Styles = Styled.div`
    > div {
        margin-top: 20px;
        > div:nth-child(2) {
            padding: 0;
        }
    }
`;

class BoardCalender extends Component {
    render() {
        const mapToComponents = (data) => {
            return data.map((content, i) => {
                return (
                    <BoardContent content={content} key={i}/>
                )
            });
        };
        return (
            <Styles>
                <Card>
                    <BoardHeader header={this.props.contentData.header}/>
                </Card>
            </Styles>
        );
    }
}

export default BoardCalender;