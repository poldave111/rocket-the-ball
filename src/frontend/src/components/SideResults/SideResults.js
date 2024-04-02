import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../../utils/utils';

const SideResults = props => {
    const game = useSelector(state => state.game);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (game.player1p > game.player2p) {
            setWinner(game.player1);
        } else {
            setWinner(game.player2);
        }
    }, [game]);

    return (
        <div className="textAlignCenter">
            <h1>The Winner is {winner}!</h1>
            <h2>Game lasted for: {formatTime(game.time)}</h2>
        </div>
    );
}

export default SideResults;