import React from 'react';
import styles from './CloseButton.module.scss';
import { Button } from 'react-bootstrap';


const CloseButton = () => {

const closeWindow = () =>  {
  window.electronAPI.dispatchClose(); 
}

  return (
    <button className={`${styles.customCloseButton} no-drag`} onClick={() => {closeWindow()}}>X</button>
  );
};


export default CloseButton;