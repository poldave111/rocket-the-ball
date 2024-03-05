import React from 'react';
import styles from './MinimizeButton.module.scss';
import { Button } from 'react-bootstrap';

const MinimizeButton = () => {



const minimizeWindow = () =>  {
    window.close(); 
}

  return (
    <button className={`${styles.customCloseButton} no-drag`} onClick={() => {minimizeWindow()}}>_</button>
  );
};


export default MinimizeButton;