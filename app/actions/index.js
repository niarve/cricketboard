import * as InitActions from './init';
import * as ProfileActions from './profiles';
import * as ResetActions from './reset';
import * as UndoActions from './undo';

export const ActionCreators = Object.assign({},
  InitActions,
  ProfileActions,
  ResetActions,
  UndoActions,
);
