import * as types from '../constants/ActionTypes';

export function openPopup() {
  return {type: types.OPEN_POPUP};
}

export function closePopup() {
  return {type: types.CLOSE_POPUP};
}

export function pendingRequest(id) {
  return {type: types.PENDING_REQUEST, id};
}

export function requestSuccess(id) {
  return {type: types.REQUEST_SUCCESS, id};
}

export function changeAvatar(dispatch) {
  return id => {
    dispatch(pendingRequest(id));
    setTimeout(() => {
      dispatch(requestSuccess(id));
    }, 1000);
  };
}
