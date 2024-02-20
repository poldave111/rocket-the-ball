import React from 'react';
//import styles from './MainPage.module.scss';
import { Button } from 'react-bootstrap';


const CloseButton = () => {



const closeWindow = () =>  {
    window.close(); 
}

  return (
    <Button onClick={closeWindow()}>X</Button>
  );
};


export default CloseButton;