import {OPEN_POPUP, CLOSE_POPUP, REQUEST_SUCCESS} from '../constants/ActionTypes';

const initialState = {
  popupOpen: false
};

export default function popupState(state = initialState, action) {
  switch (action.type) {
    case OPEN_POPUP:
      return Object.assign({}, state, {popupOpen: true});

    case REQUEST_SUCCESS:
    case CLOSE_POPUP:
      return Object.assign({}, state, {popupOpen: false});

    default:
      return state;
  }
}
