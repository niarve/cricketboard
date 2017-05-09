import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const changeScore = createReducer({}, {

});

export const count = createReducer(0, {
  [types.INCREMENT_COUNT](state, action) {
    return state + 10;
  }
});
