import React from 'react';
import Styled from 'styled-components';
import { CardHeader } from 'material-ui/Card';

const Styles = Styled.div`
    color: #000;
    padding: 12px 15px;
    position: relative;
    border-bottom: 1px solid #dedede;
    background: #f1f4f6;
    > div {
        padding: 0 !important;
        > div:nth-child(1) {
            display: inherit;
            margin-right: 10px;
            background-color: #26a69a;
            padding: 3px;
            border-radius: 4px;
            color: #fff;
        } div:nth-child(2) {
            > span {
                font-size: 1.1rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-weight: 400;
                line-height: 23px;
                margin: 0;
            }
        }
    }
`;

const BoardHeader = (props) => {
    return (
        <Styles>
            <CardHeader
                title={props.header.title}
                avatar={props.header.avatar}
            />
        </Styles>
    );
};

export default BoardHeader;