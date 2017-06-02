import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const reset = createReducer(intialState, {
  [types.RESET](state, action) {
    return {
      player1: {
        ...intialState.player1,
        name: state.player1.name
      },
      player2: {
        ...intialState.player2,
        name: state.player2.name
      }
    };
  },
});
