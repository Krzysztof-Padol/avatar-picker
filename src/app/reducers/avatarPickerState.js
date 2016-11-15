import {PENDING_REQUEST, REQUEST_SUCCESS} from '../constants/ActionTypes';

export const initialState = {
  currentAvatarId: 1,
  requestPendingId: false
};

export default function avatarPickerState(state = initialState, action) {
  switch (action.type) {
    case PENDING_REQUEST:
      return Object.assign({}, state, {requestPendingId: action.id});

    case REQUEST_SUCCESS:
      return Object.assign({}, state, {requestPendingId: false, currentAvatarId: action.id});

    default:
      return state;
  }
}
