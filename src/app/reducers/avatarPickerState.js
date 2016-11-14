import {PENDING_REQUEST, REQUEST_SUCCESS, OPEN_POPUP, CLOSE_POPUP} from '../constants/ActionTypes';

const initialState = {
  popupOpen: false,
  currentAvatarId: 1,
  requestPendingId: false
};

export default function avatarPickerState(state = initialState, action) {
  switch (action.type) {
    case PENDING_REQUEST:
      return Object.assign({}, state, {}, {requestPendingId: action.id});

    case REQUEST_SUCCESS:
      return Object.assign({}, state, {}, {requestPendingId: false, currentAvatarId: action.id, popupOpen: false});

    case OPEN_POPUP:
      return Object.assign({}, state, {}, {popupOpen: true});

    case CLOSE_POPUP:
      return Object.assign({}, state, {}, {popupOpen: false});

    default:
      return state;
  }
}
