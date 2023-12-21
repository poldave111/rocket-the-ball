

// selectors

// action 
const createActionName = action => `app/result/${action}`;
const SAVE_RESULTS = createActionName('SAVE_RESULTS');
const RESET_RESULTS = createActionName('RESET_RESULTS');

// action create 
export const setSaveResults = payload => ({ type: SAVE_RESULTS, payload });
export const resetResults = () => ({ type: RESET_RESULTS});


const resultsReducer = (statePart = [], action) => {
    switch (action.type) {
        case SAVE_RESULTS: 
            return [...statePart, action.payload];
        case RESET_RESULTS: 
            return [];
        default: 
            return statePart; 
    }
}

export default resultsReducer; 