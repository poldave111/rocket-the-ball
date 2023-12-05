import { initialGameState } from "./initialState";

// selectors

// action 
const createActionName = action => `app/game/${action}`;
const SET_START_DATA = createActionName('SET_START_DATA');
const SET_PLAYER_SCORE = createActionName('SET_PLAYER_SCORE');
const RESET_STATE = createActionName('RESET_STATE');
const SET_GAME_TIME = createActionName('SET_TIME');

// action create 
export const setStartData = payload => ({ type: SET_START_DATA, payload });
export const setPlayerScore = payload => ({ type: SET_PLAYER_SCORE, payload });
export const setGameTime = payload => ({ type: SET_GAME_TIME, payload });
export const resetState = () => ({ type: RESET_STATE });

const gameReducer = (statePart = {}, action) => {
    switch (action.type) {
        case SET_START_DATA: 
            return {...statePart, ...action.payload};
        case SET_PLAYER_SCORE:
            const correctPlayer = `${action.payload}p`;
            return {...statePart, [correctPlayer]:statePart[correctPlayer]+1};
        case SET_GAME_TIME: 
            return {...statePart, time:action.payload};
        case RESET_STATE: 
            return {...initialGameState};
        default: 
            return statePart; 
    }
}

export default gameReducer; 