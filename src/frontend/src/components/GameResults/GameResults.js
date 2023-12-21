import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState } from '../../redux/gameRedux';
import { resetResults } from '../../redux/resultsRedux';
import TableRow from '../TableRow/TableRow';

const GameResults = props => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const results = useSelector(state => state.results);
    console.log('results', results);

    const handleClick = () => {
        dispatch(resetState());
        navigate('/start');
    }

    const handleReset = () => {
        dispatch(resetResults());
        navigate('/');
    }

    return (
        <>
            <table>
                <tr>
                    <th>Player 1:</th>
                    <th>Player 1 points:</th>
                    <th>Player 2:</th>
                    <th>Player 2 points:</th>
                    <th>Game time:</th>
                </tr>
                {results.map((result) =>
                    (<TableRow {...result}></TableRow>)
                )}
            </table>
            <button onClick={handleClick}>Play Again?</button>
            <button onClick={handleReset}>Reset stats</button>
        </>

    );
}

export default GameResults;