import avatarPickerState, {initialState} from './avatarPickerState';
import {PENDING_REQUEST, REQUEST_SUCCESS} from '../constants/ActionTypes';

describe('avatarPickerState reducer', () => {
  it('should handle initial state', () => {
    expect(
      avatarPickerState(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle PENDING_REQUEST', () => {
    const exampleId = 123543123;
    expect(
      avatarPickerState(undefined, {
        type: PENDING_REQUEST,
        id: exampleId
      })
    ).toEqual({
      currentAvatarId: 1,
      requestPendingId: exampleId
    });
  });

  it('should handle REQUEST_SUCCESS', () => {
    const exampleId = 65421123;
    expect(
      avatarPickerState({
        currentAvatarId: 1,
        requestPendingId: 444
      }, {
        type: REQUEST_SUCCESS,
        id: exampleId
      })
    ).toEqual({
      currentAvatarId: exampleId,
      requestPendingId: false
    });
  });
});
