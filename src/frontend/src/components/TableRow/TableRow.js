import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState } from '../../redux/gameRedux';
import { setSaveResults } from '../../redux/resultsRedux';
import { formatTime } from '../../utils/utils';

const TableRow = props => {
    console.log('props results', props);
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