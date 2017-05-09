import { combineReducers } from 'redux';
import * as scoresReducer from './scores';

export default combineReducers(Object.assign(
  scoresReducer,
));
