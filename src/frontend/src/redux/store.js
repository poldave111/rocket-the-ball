import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import gameReducer from './gameRedux.js';
import resultsReducer from './resultsRedux';

const subreducers = {
    game: gameReducer,
    results: resultsReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default store;