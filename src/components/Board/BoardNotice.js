import React, { Component } from 'react';
import Styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import List from 'material-ui/List';

import BoardHeader from 'components/Board/BoardHeader';
import BoardContent from 'components/Board/BoardContent';

const Styles = Styled.div`
    > li {
        text-align: center;
        width: calc(100% - 32px);
        display: table;
        border-bottom: 1px solid #d0d0d0;
        > div:nth-child(1) {
            display: table-row;
            > h3 {
                font-size: 1rem;
            }
        }
        > div:nth-child(2) {
            display: table-row;
            > h3 {
                font-size: 0.8rem;
            }
        }
    }
`;

class BoardNotice extends Component {
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

export default BoardNotice;