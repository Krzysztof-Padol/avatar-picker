import * as types from '../constants/ActionTypes';
import * as actions from './index';

describe('popup actions', () => {
  it('openPopup should create OPEN_POPUP action', () => {
    expect(actions.openPopup()).toEqual({
      type: types.OPEN_POPUP
    });
  });

  it('closePopup should create CLOSE_POPUP action', () => {
    expect(actions.closePopup()).toEqual({
      type: types.CLOSE_POPUP
    });
  });
});

describe('request actions', () => {
  it('pendingRequest should create PENDING_REQUEST action', () => {
    expect(actions.pendingRequest(123)).toEqual({
      type: types.PENDING_REQUEST,
      id: 123
    });
  });

  it('requestSuccess should create REQUEST_SUCCESS action', () => {
    expect(actions.requestSuccess(234)).toEqual({
      type: types.REQUEST_SUCCESS,
      id: 234
    });
  });
});
