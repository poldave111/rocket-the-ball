import { SET_START_DATA } from "./gameRedux";
// selectors

// action 

// action create 

const listReducer = (statePart = [], action) => {
    switch (action.type) {
        case SET_START_DATA: 
            console.log('reducer set_start działa');
            const array = [...statePart, action.payload.player1, action.payload.player2];
            return [...new Set(array)];
        default: 
            return statePart; 
    }
}

export default listReducer; 