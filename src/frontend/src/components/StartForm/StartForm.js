import React, {useRef, useEffect} from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStartData } from '../../redux/gameRedux';
import { useNavigate } from 'react-router';
import styles from './StartForm.module.scss';

const StartForm = () => {
    const [formData, setFormData] = useState({
        player1: "",
        player2: "",
        targetScore: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        formData.targetScore = parseInt(formData.targetScore);
        if (formData.player1 !== "" && formData.player2 !== "" && formData.targetScore > 0 ) {
            dispatch(setStartData(formData));
            navigate("/game");
        }

    }

    const changeFormValue = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // Get the size of the form after rendering
        const formElement = formRef.current;
        if (formElement) {
          const { offsetWidth, offsetHeight } = formElement;
          // Send the size information to the main process (Electron)
          window.api.send('updateWindowSize', { width: offsetWidth, height: offsetHeight });
        }
      }, []);

    return (
        <form ref={formRef} onSubmit={handleSubmit} className={styles.formContainer}>
            <label>Player 1:</label><input value={formData.player1} name="player1" onChange={(e) => changeFormValue(e)}></input> {/* you can use with event (e) or without */}
            <label>Player 2:</label><input value={formData.player2} name="player2" onChange={changeFormValue} ></input>
            <label>Ending score:</label><input value={formData.score} name="targetScore" onChange={changeFormValue}></input>
            <button type="submit">Play!</button>
        </form>
    );
}

export default StartForm;