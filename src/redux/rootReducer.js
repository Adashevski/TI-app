import { combineReducers } from 'redux';
import { gameReducer } from './game/gameSlice';

const rootReducer = combineReducers({
    game: gameReducer,
});

export default rootReducer;
