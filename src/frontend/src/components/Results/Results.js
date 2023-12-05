import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState } from '../../redux/gameRedux';
import { setSaveResults } from '../../redux/resultsRedux';
import { formatTime } from '../../utils/utils';

const Results = props => {
    const game = useSelector(state => state.game);
    const [winner, setWinner] = useState(null);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const mounted = useRef(false);

    useEffect(() => {
        if(mounted.current === false) {
            mounted.current = true;
        dispatch(setSaveResults(game));
        }
    },[mounted])

    useEffect(() => {
        if (game.player1p > game.player2p) {
            setWinner(game.player1);
        } else {
            setWinner(game.player2);
        }
    }, [game]);

    const handleClick = () => {
        dispatch(resetState());
        navigate('/start');
    }

    const handleClickResults = () => {
        navigate('/gameresults');
    }

    return (
        <>
            <h1>The Winner is {winner}!</h1>
            <h2>Game lasted for: {formatTime(game.time)}</h2>
            <button onClick={handleClick}>Play Again?</button>

            <button onClick={handleClickResults}>Show stats</button>
        </>
    );
}

export default Results;