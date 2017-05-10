import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const intialState = {
  player1: {
    name: 'Player1',
    s15: 0,
    s16: 0,
    s17: 0,
    s18: 0,
    s19: 0,
    s20: 0,
    s50: 0,
  },
  player2: {
    name: 'Player2',
    s15: 0,
    s16: 0,
    s17: 0,
    s18: 0,
    s19: 0,
    s20: 0,
    s50: 0,
  },
}

export const players = createReducer(
  intialState,
  {
  [types.NEW_PLAYER](state, action) {
    return state;
  },
  [types.CHANGE_P1_SCORE_15](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s15: state.player1.s15 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_16](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s16: state.player1.s16 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_17](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s17: state.player1.s17 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_18](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s18: state.player1.s18 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_19](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s19: state.player1.s19 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_20](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s20: state.player1.s20 + 1
      }
    };
  },
  [types.CHANGE_P1_SCORE_50](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s50: state.player1.s50 + 1
      }
    };
  },
  //player 2 stuff
  [types.CHANGE_P2_SCORE_15](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s15: state.player2.s15 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_16](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s16: state.player2.s16 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_17](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s17: state.player2.s17 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_18](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s18: state.player2.s18 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_19](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s19: state.player2.s19 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_20](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s20: state.player2.s20 + 1
      }
    };
  },
  [types.CHANGE_P2_SCORE_50](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        s50: state.player2.s50 + 1
      }
    };
  },
  [types.CHANGE_P1_NAME](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        name: action.name
      }
    };
  },
  [types.CHANGE_P2_NAME](state, action) {
    return {
      ...state,
      player2: {
        ...state.player2,
        name: action.name
      }
    };
  },

});
