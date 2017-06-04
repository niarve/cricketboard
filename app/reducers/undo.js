import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const undo = createReducer({}, {
  [types.UNDO](state, action) {
    return {
      ...state,
      player1: state.oldPlayers.player1,
      player2: state.oldPlayers.player2,
    };
  },
});
