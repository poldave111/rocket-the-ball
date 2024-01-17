import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStartData } from '../../redux/gameRedux';
import { useNavigate } from 'react-router';
import styles from './StartForm.module.scss';

const StartForm = () => {
    const [formData, setFormData] = useState({
        player1: "",
        player2: "",
        targetScore: "",
        advantage: false,
    });
    const playerList = useSelector((state) => state.playerList);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        let {player1, player2, targetScore} = formData;

        targetScore = parseInt(targetScore);
        if (player1 === player2) {
            alert('Proszę wprowadzić różniące się od siebie imiona. Dzięki!');
        }
        if(targetScore <= 0) {
            alert('Proszę wprowadzić docelową punktację.');
        }
        if (player1 == "" || player2 == "") {
            alert('Proszę wprowadzić obydwa imiona');
        }
        if (player1 !== "" && player2 !== "" && targetScore > 0 && player1 !== player2) {
            dispatch(setStartData({player1, player2, targetScore}));
            navigate("/game");
        }
    }

    const changeFormValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const addPlayer = (e) => {
        const {player, name} = e.target.dataset;

        if(player && name) {
            setFormData({ ...formData, [player]:name});
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label>Player 1:</label><input value={formData.player1} name="player1" onChange={(e) => changeFormValue(e)}></input> {/* you can use with event (e) or without */}
                <label>Player 2:</label><input value={formData.player2} name="player2" onChange={changeFormValue} ></input>
                <label>Ending score:</label><input value={formData.score} name="targetScore" onChange={changeFormValue} type='number' min='1'></input>
                <label>Advantage game:</label><input type="checkbox" name="advantage" value={formData.advantage} checked={formData.advantage} onChange={changeFormValue}></input>
                <button type="submit">Play!</button>
            </form>
            <div className={styles.list} onClick={(e) => addPlayer(e)}>
                {playerList.map((name) => <div>{name}<button data-player={'player1'} data-name={name}>add as p1</button><button data-player={'player2'} data-name={name}>add as p2</button></div>)}
            </div>
        </div>
    );
}

export default StartForm;