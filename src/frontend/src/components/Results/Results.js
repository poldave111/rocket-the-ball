import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState, reMatch } from '../../redux/gameRedux';
import { setSaveResults } from '../../redux/resultsRedux';
import { formatTime } from '../../utils/utils';
import styles from './Results.module.scss';

const Results = props => {
    const game = useSelector(state => state.game);
    const [winner, setWinner] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            dispatch(setSaveResults(game));
        }
    }, [mounted, game, dispatch])

    useEffect(() => {
        if (game.player1p > game.player2p) {
            setWinner(game.player1);
        } else {
            setWinner(game.player2);
        }
    }, [game]);

    const handleClick = () => {
        dispatch(resetState());
        navigate('/main/start');
    }

    const handleClickResults = () => {
        navigate('/main/gameresults');
    }


    const handleRematch = () => {
        dispatch(reMatch());
        navigate('/main/game')
    }

    return (
        <div className="formContainer">
            <div className="textAlignCenter">
                <h1>The Winner is {winner}!</h1>
                <h2>Game lasted for: {formatTime(game.time)}</h2>
            </div>
            <div className="textAlignCenter">
                <div>
                    <button className="no-drag buttonMargin largeButton" onClick={handleClick}>Play Again?</button>
                    <button className="no-drag buttonMargin largeButton" onClick={handleRematch}>Re-match!</button>
                </div>
                <div>
                    <button className="no-drag buttonMargin largeButton" onClick={handleClickResults}>Show stats</button>
                </div>
            </div>
        </div>
    );
}

export default Results;