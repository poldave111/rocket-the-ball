import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState } from '../../redux/gameRedux';
import { resetResults } from '../../redux/resultsRedux';
import TableRow from '../TableRow/TableRow';
import Stats from '../Stats/Stats';

const GameResults = () => {
    const [winCount, setWinCount] = useState({});
    const [sortedWinners, setSortedWinners] = useState([]);
    // how to go through table and count how many times person won the game
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const results = useSelector(state => state.results);
    const winners = useSelector(state => state.winner);

    useEffect(() => {
        setSortedWinners(Object.keys(winners).sort((a, b) => winners[b] - winners[a]));
    }, [winners]);

    const handleClick = () => {
        dispatch(resetState());
        navigate('/main/start');
    }

    const handleReset = () => {
        dispatch(resetResults());
        navigate('/main/index');
    }

    console.log(winners);
    console.log(results);
    return (
        <div className="formContainer">
            <Stats />
            <div className="textAlignCenter">
                <button className="no-drag largeButton buttonMargin" onClick={handleClick}>Play Again?</button>
                <button className="no-drag largeButton buttonMargin" onClick={handleReset}>Reset stats</button>
            </div>
        </div>

    );
}

export default GameResults;