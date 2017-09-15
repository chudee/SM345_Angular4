import React from 'react';
import Styled from 'styled-components';
import Card from 'material-ui/Card';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'; 

import BoardHeader from 'components/Board/BoardHeader';
import Room_C from 'imgs/c.png';
import Room_java from 'imgs/java.png';
import Room_algo from 'imgs/algo.png';

const Styles = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    > ul {
        flex-wrap: nowrap;
        transform: translateZ(0);
        > li {
            > div {
                > div {
                    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%);
                }
            }
        }
    }
`;

const BoardMentorRoom = (props) => {
    return (
        <Card>
            <BoardHeader header={props.contentData.header}/>
            <Styles>
                <GridList cellHeight={300} cols={2.5}>
                    <GridListTile key={Room_C}>
                        <img src={Room_C} alt={Room_C} />
                        <GridListTileBar
                            title="[주제] C언어"
                            subtitle={<span>멘토: 씨멘토</span>}
                        />
                    </GridListTile>
                    <GridListTile key={Room_java}>
                        <img src={Room_java} alt={Room_java} />
                        <GridListTileBar
                            title="[주제] 자바"
                            subtitle={<span>멘토: 자바멘토</span>}
                        />
                    </GridListTile>
                    <GridListTile key={Room_algo}>
                        <img src={Room_algo} alt={Room_algo} />
                        <GridListTileBar
                            title="[주제] 알고리즘"
                            subtitle={<span>멘토: 알고멘토</span>}
                        />
                    </GridListTile>
                </GridList>
            </Styles>
        </Card>
        
    );
};

export default BoardMentorRoom;