import { combineReducers } from 'redux';
import { boardReducer } from './board-reducer';
import { menuReducer } from './menu-reducer';

const reducers = combineReducers({
  boardReducer,
  menuReducer
});

export default reducers;
