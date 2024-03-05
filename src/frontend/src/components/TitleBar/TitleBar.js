import React, { useState, useEffect } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import MinimizeButton from '../MinimizeButton/MinimizeButton';
import styles from './TitleBar.module.scss';


const TitleBar = () => {

    return (
        <nav className={`${styles.navBar}`}>
            <strong>Rocket-the-ball</strong>
            <div>
                <MinimizeButton />
                <CloseButton />
            </div>
        </nav>

    );
}

export default TitleBar;