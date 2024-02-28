import React from 'react';
//import styles from './CloseButton.module.scss';
import { Button } from 'react-bootstrap';


const CloseButton = () => {



const closeWindow = () =>  {
    window.close(); 
}

  return (
    <Button className="no-drag" onClick={() => {closeWindow()}}>X</Button>
  );
};


export default CloseButton;