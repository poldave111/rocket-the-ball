import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
        let { player1, player2, targetScore, advantage } = formData;
        console.log('formData', formData);
        targetScore = parseInt(targetScore);
        if (player1 === player2) {
            alert('Proszę wprowadzić różniące się od siebie imiona. Dzięki!');
        }
        if (targetScore <= 0) {
            alert('Proszę wprowadzić docelową punktację.');
        }
        if (player1 == "" || player2 == "") {
            alert('Proszę wprowadzić obydwa imiona');
        }
        if (player1 !== "" && player2 !== "" && targetScore > 0 && player1 !== player2) {
            dispatch(setStartData({ player1, player2, targetScore, advantage }));
            navigate("/game");
        }
    }

    const changeFormValue = (e) => {
        if (e.target.name == 'advantage') {
            setFormData({ ...formData, advantage: !formData.advantage })
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        //console.log('e.target.name', e.target.name, e.target.value);

    }

    const addPlayer = (e) => {
        const { player, name } = e.target.dataset;

        if (player && name) {
            setFormData({ ...formData, [player]: name });
        }
    }

    return (
        <div className={`formContainer ${styles.containerButton}`}>
            <div>
                <form onSubmit={handleSubmit} >
                    <Form.Group controlId="player1">
                        <Form.Label>Player 1:</Form.Label>
                        <Form.Control className="no-drag" value={formData.player1} name="player1" onChange={(e) => changeFormValue(e)}></Form.Control> {/* you can use with event (e) or without */}
                    </Form.Group>
                    <Form.Group controlId="player2">
                        <Form.Label>Player 2:</Form.Label>
                        <Form.Control className="no-drag" value={formData.player2} name="player2" onChange={changeFormValue} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ending score:</Form.Label>
                        <Form.Control className="no-drag" value={formData.score} name="targetScore" onChange={changeFormValue} type='number' min='1' />
                    </Form.Group>
                    {/* <Form.Group controlId="advantage">
                    <Form.Check type="checkbox" label="Advantage game" name="advantage" checked={formData.advantage} onChange={changeFormValue} />
                </Form.Group> */}
                    <div className="displayFlex">
                        <Form.Label className="marginRightFive">Advantage game:</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="advantage-checkbox"
                            label={
                                <>
                                    <i className={`fas fa-check ${styles.checkboxIcon}`}></i>
                                </>
                            }
                            name="advantage"
                            checked={formData.advantage}
                            onChange={changeFormValue}
                            custom
                            className={`${styles.customCheckbox} `}
                        />
                    </div>


                    {/* <input className={`no-drag ${styles.customCheckbox}`} type="checkbox" name="advantage" value={formData.advantage} onChange={changeFormValue}></input> */}
                    <Button className="no-drag btn btn-danger" type="submit">Play!</Button>
                </form>
            </div>
            <Row className={styles.list} onClick={(e) => addPlayer(e)}>
                {playerList.map((name) => <div key={name} className="d-flex align-items-center mb-2"><Col>{name}</Col><Col><button className="btn btn-success" data-player={'player1'} data-name={name}>add as p1</button></Col><Col><button className="btn btn-success" data-player={'player2'} data-name={name}>add as p2</button></Col></div>)}
            </Row>
        </div>
    );
}

export default StartForm;