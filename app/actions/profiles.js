import * as types from './types';

export function changeP1Score(value, updateScore) {
  switch (value) {
    case 15:
      return {type: types.CHANGE_P1_SCORE_15, updateScore: updateScore};
    case 16:
      return {type: types.CHANGE_P1_SCORE_16, updateScore: updateScore};
    case 17:
      return {type: types.CHANGE_P1_SCORE_17, updateScore: updateScore};
    case 18:
      return {type: types.CHANGE_P1_SCORE_18, updateScore: updateScore};
    case 19:
      return {type: types.CHANGE_P1_SCORE_19, updateScore: updateScore};
    case 20:
      return {type: types.CHANGE_P1_SCORE_20, updateScore: updateScore};
    case 25:
      return {type: types.CHANGE_P1_SCORE_25, updateScore: updateScore};
    default:
      return {type: types.ERROR};
  }
}

export function changeP2Score(value) {
  switch (value) {
    case 15:
      return {type: types.CHANGE_P2_SCORE_15, updateScore: updateScore};
    case 16:
      return {type: types.CHANGE_P2_SCORE_16, updateScore: updateScore};
    case 17:
      return {type: types.CHANGE_P2_SCORE_17, updateScore: updateScore};
    case 18:
      return {type: types.CHANGE_P2_SCORE_18, updateScore: updateScore};
    case 19:
      return {type: types.CHANGE_P2_SCORE_19, updateScore: updateScore};
    case 20:
      return {type: types.CHANGE_P2_SCORE_20, updateScore: updateScore};
    case 25:
      return {type: types.CHANGE_P2_SCORE_25, updateScore: updateScore};
    default:
      return {type: types.ERROR};
  }
}

export function changeP1Name(value) {
  return {
    type: types.CHANGE_P1_NAME,
    name: value
  };
}

export function changeP2Name(value) {
  return {
    type: types.CHANGE_P2_NAME,
    name: value
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}

export function undo() {
  return {
    type: types.UNDO
  };
}
