import * as types from '../constants/ActionTypes';

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
