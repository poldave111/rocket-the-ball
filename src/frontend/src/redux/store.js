import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import gameReducer from './gameRedux.js';
import resultsReducer from './resultsRedux';
import listReducer from './listRedux.js';
import winnerReducer from './winnerRedux.js';
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";

const subreducers = {
    game: gameReducer,
    results: resultsReducer,
    playerList: listReducer,
    winner: winnerReducer,
}

const reducer = combineReducers(subreducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState,
    composeEnhancers(
        applyMiddleware(createStateSyncMiddleware()),
    )
);

initMessageListener(store);

export default store;