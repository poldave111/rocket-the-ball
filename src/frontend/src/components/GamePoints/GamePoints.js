import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


const Game = () => {
  const [time, setTime] = useState(0);
  const mounted = useRef(false);
  const game = useSelector(state => state.game);

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
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center"><h2>{game.player2}: {game.player2p}</h2></Col>
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