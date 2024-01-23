
// selectors

// action 
const createActionName = action => `app/game/${action}`;
const SET_WINNER = createActionName('SET_WINNER');


// action create 
export const setPlayerAsWinner = payload => ({ type: SET_WINNER, payload });

const winnerReducer = (statePart = {}, action) => {
    switch (action.type) {
        case SET_WINNER: 
            console.log('reducer set_winner działa');
            if(statePart[action.payload]) {
                return {
                        ...statePart,
                        [action.payload]: statePart[action.payload] + 1}; // w obiekcie nie używamy znaków =, czyli nie można tak [action.payload] =  statePart[action.payload] + 1};
            } else {
                return  {   
                        ...statePart, 
                        [action.payload]: 1 // tworzymy nowy klucz w obiekcie który właśnie utworzyliśmy
                    };
            }
        default: 
            return statePart; 
    }
}

export default winnerReducer; 