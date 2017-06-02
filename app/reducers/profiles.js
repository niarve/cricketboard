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
    s25: 0,
    score: 0,
  },
  player2: {
    name: 'Player2',
    s15: 0,
    s16: 0,
    s17: 0,
    s18: 0,
    s19: 0,
    s20: 0,
    s25: 0,
    score: 0,
  },
}

export const player = createReducer(intialState, {
  [types.CHANGE_P1_SCORE_15](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s15: state.player1.s15 + 1,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_16](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s16: state.player1.s16 + 1,
        score: action.updateScore ? state.player1.score + 16 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_17](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s17: state.player1.s17 + 1,
        score: action.updateScore ? state.player1.score + 17 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_18](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s18: state.player1.s18 + 1,
        score: action.updateScore ? state.player1.score + 18 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_19](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s19: state.player1.s19 + 1,
        score: action.updateScore ? state.player1.score + 19 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_20](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s20: state.player1.s20 + 1,
        score: action.updateScore ? state.player1.score + 20 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  [types.CHANGE_P1_SCORE_25](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        s25: state.player1.s25 + 1,
        score: action.updateScore ? state.player1.score + 25 : state.player1.score,
      },
      oldPlayers: {
        player1: state.player1,
        player2: state.player2,
      }
    };
  },
  //change names
  [types.CHANGE_P1_NAME](state, action) {
    return {
      ...state,
      player1: {
        ...state.player1,
        name: action.name
      }
    };
  },
});
