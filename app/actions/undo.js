import * as types from './types';

export function undo() {
  return {
    type: types.UNDO
  };
}
