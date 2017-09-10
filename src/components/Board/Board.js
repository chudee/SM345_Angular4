import React, { Component } from 'react';
import Styled from 'styled-components';
import Card from 'material-ui/Card';
import { Grid } from 'material-ui';

import BoardHeader from 'components/Board/BoardHeader';
import BoardContent from 'components/Board/BoardContent';

const Styles = Styled.div`
    > div {
        margin-top: 20px;
    }
`;

class Board extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Styles>
                <Card>
                    <BoardHeader header={this.props.contentData.header}/>
                    <BoardContent content={this.props.contentData.content}/>
                </Card>
            </Styles>
        );
    }
}

export default Board;