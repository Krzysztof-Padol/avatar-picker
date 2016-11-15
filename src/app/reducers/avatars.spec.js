import avatars, {initialState} from './avatars';

describe('avatars reducer', () => {
  it('should handle initial state', () => {
    expect(
      avatars(undefined, {})
    ).toEqual(initialState);
  });
});
