import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStartData } from '../../redux/gameRedux';
import { useNavigate } from 'react-router';

const StartForm = props => {
    const [formData, setFormData] = useState({
        player1: "",
        player2: "",
        targetScore: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        if (formData.player1 !== "" && formData.player2 !== "" && parseInt(formData.targetScore) > 0 ) {
            dispatch(setStartData(formData));
            navigate("/game");
        }

    }

    const changeFormValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Player 1:</label><input value={formData.player1} name="player1" onChange={(e) => changeFormValue(e)}></input> {/* you can use with event (e) or without */}
            <label>Player 2:</label><input value={formData.player2} name="player2" onChange={changeFormValue} ></input>
            <label>Ending score:</label><input value={formData.score} name="targetScore" onChange={changeFormValue}></input>
            <button type="submit">Play!</button>
        </form>
    );
}

export default StartForm;