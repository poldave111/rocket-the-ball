import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerScore, setGameTime } from '../../redux/gameRedux';
import { useNavigate } from 'react-router';
import { formatTime } from '../../utils/utils';

const Game = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [time, setTime] = useState(0);
    const mounted = useRef(false);
    const game = useSelector(state => state.game);
    const advantage = useSelector(state => state.game.advantage);

    const gameType = {
        advantage: (game) => ((game.player1p >= game.targetScore - 1 || game.player2p >= game.targetScore - 1) && (Math.abs(game.player1p - game.player2p) === 2)),
        normal: (game) => (game.player1p === game.targetScore || game.player2p === game.targetScore),
    }

    useEffect(() => {
        let isWinner = advantage ? gameType.advantage : gameType.normal; // isWinner będzie referencją do funkcji advantage lub normal
        if (isWinner(game)) {
            dispatch(setGameTime(time));
            navigate('/results');
        }
    }, [game.player1p, game.player2p, dispatch, game.targetScore, navigate, time]);

    const handleClickPoints = (player) => {
        dispatch(setPlayerScore(player));
    }

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    }, [mounted])

    return (
        <>
            <div>
                <h2>{game.player1}: {game.player1p}</h2>
                <button onClick={() => handleClickPoints('player1')}>Add Point</button>
            </div>
            <div>
                <h2>{game.player2}: {game.player2p}</h2>
                <button onClick={() => handleClickPoints('player2')}>Add Point</button>
            </div>
            <div>
                {formatTime(time)}
            </div>
        </>

    );
}

export default Game;