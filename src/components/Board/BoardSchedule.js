import React, { Component } from 'react';
import Styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import List from 'material-ui/List';

import BoardHeader from 'components/Board/BoardHeader';
import BoardContent from 'components/Board/BoardContent';

const Styles = Styled.div`
    > li {
        display: table;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        > div {
            padding: 0;
            display: table-cell;
            text-align: center;
            > h3 {
                font-size: 0.8rem;
            }
        }
    }
`;

const styles = Styled.div`

`

class BoardSchedule extends Component {
    render() {
        const mapToComponents = (data) => {
            return data.map((content, i) => {
                return (
                    <BoardContent content={content} key={i}/>
                )
            });
        };
        return (
            <Card>
                <BoardHeader header={this.props.contentData.header}/>
                <CardContent>
                    <List>
                        <Styles>
                            {mapToComponents(this.props.contentData.contents)}
                        </Styles>
                    </List>
                </CardContent>
            </Card>
        );
    }
}

export default BoardSchedule;