import popupState, {initialState} from './popupState';
import {OPEN_POPUP, CLOSE_POPUP, REQUEST_SUCCESS} from '../constants/ActionTypes';

describe('popupState reducer', () => {
  it('should handle initial state', () => {
    expect(
      popupState(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle OPEN_POPUP', () => {
    expect(
      popupState(undefined, {
        type: OPEN_POPUP
      })
    ).toEqual({
      popupOpen: true
    });
  });

  it('should handle CLOSE_POPUP', () => {
    expect(
      popupState({
        popupOpen: true
      }, {
        type: CLOSE_POPUP
      })
    ).toEqual({
      popupOpen: false
    });
  });

  it('should handle REQUEST_SUCCESS', () => {
    expect(
      popupState({
        popupOpen: true
      }, {
        type: REQUEST_SUCCESS
      })
    ).toEqual({
      popupOpen: false
    });
  });
});
