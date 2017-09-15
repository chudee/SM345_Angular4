import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';

const BoardContent = (props) => {
    return (
        <ListItem button>
            <ListItemText primary={props.content.title} />
            <ListItemText primary={props.content.date} />
        </ListItem>
    );
}

export default BoardContent;