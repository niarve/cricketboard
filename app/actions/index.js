import * as ProfileActions from './profiles';
import * as ResetActions from './reset';
import * as UndoActions from './undo';

export const ActionCreators = Object.assign({},
  ProfileActions,
  ResetActions,
  UndoActions,
);
