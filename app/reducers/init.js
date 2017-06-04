import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { initialState } from '../lib/initialState';

export const players = createReducer({}, {
  [types.INIT](state, action) {
    return {
      initialState
    };
  },
});
