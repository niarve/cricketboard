import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const player = createReducer(' ', {
  [types.CHANGE_P1_SCORE](state, action) {
    switch (state){
      case ' ':
        return '/';
      case '/':
        return 'X';
      case 'X':
        return 'O';
      case 'O':
        return ' ';
      default:
        return 'Error';
    }
  }
});

export const p2score = createReducer(' ', {
  [types.CHANGE_P2_SCORE](state, action) {
    switch (state){
      case ' ':
        return '/';
      case '/':
        return 'X';
      case 'X':
        return 'O';
      case 'O':
        return ' ';
      default:
        return 'Error';
    }
  }
});
