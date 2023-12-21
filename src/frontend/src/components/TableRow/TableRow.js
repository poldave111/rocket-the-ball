import React from 'react';
import { formatTime } from '../../utils/utils';

const TableRow = props => {
    return (
        <tr>
            <td>{props.player1}</td>
            <td>{props.player1p}</td>
            <td>{props.player2}</td>
            <td>{props.player2p}</td>
            <td>{formatTime(props.time)}</td>
        </tr>
    );
}

export default TableRow;