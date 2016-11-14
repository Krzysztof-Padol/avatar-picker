import {combineReducers} from 'redux';
import avatars from './avatars';
import avatarPickerState from './avatarPickerState';

const rootReducer = combineReducers({
  avatars,
  avatarPickerState
});

export default rootReducer;
