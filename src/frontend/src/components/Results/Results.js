import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState, reMatch } from '../../redux/gameRedux';
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
    },[mounted, game, dispatch])

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

    
    const handleRematch = () => {
        dispatch(reMatch());
        navigate('/game')
    }

    return (
        <div className="formContainer">
            <h1>The Winner is {winner}!</h1>
            <h2>Game lasted for: {formatTime(game.time)}</h2>
            <button onClick={handleClick}>Play Again?</button>
            <button onClick={handleClickResults}>Show stats</button>
            <button onClick={handleRematch}>Re-match!</button>
        </div>
    );
}

export default Results;