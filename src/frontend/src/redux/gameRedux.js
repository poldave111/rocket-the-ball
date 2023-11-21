

// action 
const createActionName = action => `app/game/${action}`;
const SET_START_DATA = createActionName('SET_START_DATA');

// action create 
export const setStartData = payload => ({ type: SET_START_DATA, payload });

const gameReducer = (statePart = {}, action) => {
    switch (action.type) {
        case SET_START_DATA: 
            return {...statePart, ...action.payload};
        default: 
            return statePart; 
    }
}

export default gameReducer; 