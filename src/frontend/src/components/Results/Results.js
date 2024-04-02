import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetState, reMatch } from '../../redux/gameRedux';
import { setSaveResults } from '../../redux/resultsRedux';
import SideResults from '../SideResults/SideResults';


const Results = props => {
    const game = useSelector(state => state.game);
    const [winner, setWinner] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mounted = useRef(false);

    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            dispatch(setSaveResults(game));
        }
    }, [mounted, game, dispatch])

    useEffect(() => {
        if (game.player1p > game.player2p) {
            setWinner(game.player1);
        } else {
            setWinner(game.player2);
        }
    }, [game]);

    const handleClick = () => {
        dispatch(resetState());
        navigate('/main/start');
        if(window.electronAPI) {
            window.electronAPI.dispatchSideView("/side")
        }
    }

    const handleClickResults = () => {
        navigate('/main/gameresults');
        if(window.electronAPI) {
            window.electronAPI.dispatchSideView("/side/stats")
        }
    }


    const handleRematch = () => {
        dispatch(reMatch());
        navigate('/main/game');
        if(window.electronAPI) {
            window.electronAPI.dispatchSideView("/side/points")
        }
    }

    return (
        <div className="formContainer">
            <SideResults />
            <div className="textAlignCenter">
                <div>
                    <button className="no-drag buttonMargin largeButton" onClick={handleClick}>Play Again?</button>
                    <button className="no-drag buttonMargin largeButton" onClick={handleRematch}>Re-match!</button>
                </div>
                <div>
                    <button className="no-drag buttonMargin largeButton" onClick={handleClickResults}>Show stats</button>
                </div>
            </div>
        </div>
    );
}

export default Results;