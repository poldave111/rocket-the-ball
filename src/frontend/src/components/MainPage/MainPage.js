import React from 'react';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router';
const MainPage = () => {
   const navigate = useNavigate(); 
   const onStartClick = () => navigate("/start");
  return (
    <div className="formContainer">
      <h1>Welcome to My Game</h1>
      <p>Get ready for an exciting adventure!</p>
      <button className="no-drag" onClick={onStartClick}>Start Game</button>
    </div>
  );
};


export default MainPage;