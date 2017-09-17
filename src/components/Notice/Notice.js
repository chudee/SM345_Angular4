import React from 'react';

import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from 'material-ui';
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';

const Notice = ({ classes, data, handleExpandClick, expanded }) => {
    return (
        <Paper>
            <Table style={{tableLayout: 'fixed'}}>
                <TableHead>
                    <TableRow>
                        <TableCell> 제목 </TableCell>
                        <TableCell numeric>날짜</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow 
                                hover
                                key={n.id}
                                onClick={handleExpandClick}
                                aria-checked={expanded}
                                selected={expanded}
                            >
                                <TableCell>{n.title}</TableCell>
                                <TableCell numeric>{n.date}</TableCell>
                                <Dialog 
                                    open={expanded} 
                                    onRequestClose={handleExpandClick}
                                >
                                    <DialogTitle>{n.title}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            {n.content}
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default Notice;