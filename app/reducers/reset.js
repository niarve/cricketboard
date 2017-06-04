import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { initialState } from '../lib/initialState';

export const reset = createReducer({}, {
  [types.RESET](state, action) {
    return {
      player1: {
        ...initialState.player1,
        name: state.player1.name
      },
      player2: {
        ...initialState.player2,
        name: state.player2.name
      }
    };
  },
});
