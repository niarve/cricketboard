import * as types from './types';

export function changeP1Score(value) {
  console.log('nate', value);
  switch (value) {
    case 15:
      return {type: types.CHANGE_P1_SCORE_15};
    case 16:
      return {type: types.CHANGE_P1_SCORE_16};
    case 17:
      return {type: types.CHANGE_P1_SCORE_17};
    case 18:
      return {type: types.CHANGE_P1_SCORE_18};
    case 19:
      return {type: types.CHANGE_P1_SCORE_19};
    case 20:
      return {type: types.CHANGE_P1_SCORE_20};
    case 25:
      return {type: types.CHANGE_P1_SCORE_25};
    default:
      return {type: types.ERROR};
  }
}

export function changeP2Score(value) {
  switch (value) {
    case 15:
      return {type: types.CHANGE_P2_SCORE_15};
    case 16:
      return {type: types.CHANGE_P2_SCORE_16};
    case 17:
      return {type: types.CHANGE_P2_SCORE_17};
    case 18:
      return {type: types.CHANGE_P2_SCORE_18};
    case 19:
      return {type: types.CHANGE_P2_SCORE_19};
    case 20:
      return {type: types.CHANGE_P2_SCORE_20};
    case 25:
      return {type: types.CHANGE_P2_SCORE_25};
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
