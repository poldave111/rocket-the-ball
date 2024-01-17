import React from 'react';
import { formatTime } from '../../utils/utils';
import PropTypes from 'prop-types';

const TableRow = props => {
    const {player1, player1p, player2, player2p, time} = props;
    return (
        <tr>
            <td>{player1}</td>
            <td>{player1p}</td>
            <td>{player2}</td>
            <td>{player2p}</td>
            <td>{formatTime(time)}</td>
        </tr>
    );
}



export default TableRow;