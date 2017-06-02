import { combineReducers } from 'redux';
import * as profilesReducer from './profiles';
import * as resetReducer from './reset';
import * as undoReducer from './undo';

export default combineReducers(Object.assign(
  profilesReducer,
  resetReducer,
  undoReducer,
));
