import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableRow from '../TableRow/TableRow';

const Stats = () => {
    const [winCount, setWinCount] = useState({});
    const [sortedWinners, setSortedWinners] = useState([]);
    // how to go through table and count how many times person won the game
    const results = useSelector(state => state.results);
    const winners = useSelector(state => state.winner);

    useEffect(() => {
        setSortedWinners(Object.keys(winners).sort((a, b) => winners[b] - winners[a]));
    }, [winners]);

    console.log(winners);
    console.log(results);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Player 1:</th>
                        <th>Player 1 points:</th>
                        <th>Player 2:</th>
                        <th>Player 2 points:</th>
                        <th>Game time:</th>
                    </tr>
                    {results.map((result, index) => (<TableRow key={index} {...result}></TableRow>))}
                </tbody>
            </table>
            <table>
                {sortedWinners.map((winner) => (<div>{winner}:{winners[winner]}</div>)


                )}
            </table>
        </>
    );
}

export default Stats;