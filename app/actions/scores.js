import * as types from './types';

export function incrementCount() {
  return {
    type: types.INCREMENT_COUNT,
  }
}

export function changeP1Score() {
  return {
    type: types.CHANGE_P1_SCORE,
  }
}

export function changeP2Score() {
  return {
    type: types.CHANGE_P2_SCORE,
  }
}
