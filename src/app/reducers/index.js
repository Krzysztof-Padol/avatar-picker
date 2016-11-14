import {combineReducers} from 'redux';
import avatars from './avatars';
import avatarPickerState from './avatarPickerState';
import popupState from './popupState';

const rootReducer = combineReducers({
  avatars,
  avatarPickerState,
  popupState
});

export default rootReducer;
