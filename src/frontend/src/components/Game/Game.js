import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayerScore, setGameTime } from '../../redux/gameRedux';
import { setPlayerAsWinner } from '../../redux/winnerRedux';
import { useNavigate } from 'react-router';
import { formatTime } from '../../utils/utils';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Game.css'; // Import your CSS file for additional styling

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const mounted = useRef(false);
  const game = useSelector(state => state.game);
  const advantage = useSelector(state => state.game.advantage);
  const { player1p, player2p, player1, player2 } = game;

  const gameType = {
    advantage: (game) => ((game.player1p >= game.targetScore - 1 || game.player2p >= game.targetScore - 1) && (Math.abs(game.player1p - game.player2p) === 2)),
    normal: (game) => (game.player1p === game.targetScore || game.player2p === game.targetScore),
  };

  useEffect(() => {
    let isWinner = advantage ? gameType.advantage : gameType.normal;

    if (isWinner(game)) {
      const winner = player1p > player2p ? player1 : player2;
      dispatch(setGameTime(time));
      dispatch(setPlayerAsWinner(winner));
      navigate('/main/results');
    }
  }, [game.player1p, game.player2p, dispatch, game.targetScore, navigate, time]);

  const handleClickPoints = (player) => {
    dispatch(setPlayerScore(player));
  };

  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
      setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  }, [mounted]);

  return (
    <div className="formContainer">
      <Row className="justify-content-center">
        <Col className="text-center"><h2>{game.player1}: {game.player1p}</h2></Col>
        <Col className="text-center mb-2"><button className="no-drag" onClick={() => handleClickPoints('player1')}>Add Point</button></Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center"><h2>{game.player2}: {game.player2p}</h2></Col>
        <Col className="text-center mb-2"><button className="no-drag" onClick={() => handleClickPoints('player2')}>Add Point</button></Col>
      </Row>
      <div className="digital-clock">
        <div className="clock-numbers">
          <div className="hours">{new Date(time * 1000).toISOString().substr(11, 8)}</div>
        </div>
      </div>
      {/* <div className="text-center mt-3">
        {formatTime(time)}
      </div> */}
    </div>
  );
}

export default Game;