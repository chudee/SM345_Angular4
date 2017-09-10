import React from 'react';
import Styled from 'styled-components';
import { CardContent } from 'material-ui/Card';

const Styles = Styled.div`

`;

const BoardContent = (props) => {
    return (
        <Styles>
            <CardContent>
                {props.content.name}
            </CardContent>
        </Styles>
    );
};

export default BoardContent;