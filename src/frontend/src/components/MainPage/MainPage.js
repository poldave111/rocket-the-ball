import React from 'react';
import styles from './MainPage.module.scss';
import { useNavigate } from 'react-router';
const MainPage = () => {
   const navigate = useNavigate(); 
   const onStartClick = () => navigate("/start");
  return (
    <div className={styles["start-page"]}>
      <h1>Welcome to My Game</h1>
      <p>Get ready for an exciting adventure!</p>
      <button onClick={onStartClick}>Start Game</button>
    </div>
  );
};


export default MainPage;