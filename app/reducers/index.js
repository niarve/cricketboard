import { combineReducers } from 'redux';
import * as initReducer from './init';
import * as profilesReducer from './profiles';
import * as resetReducer from './reset';
import * as undoReducer from './undo';

export default combineReducers(Object.assign(
  initReducer,
  profilesReducer,
  resetReducer,
  undoReducer,
));
