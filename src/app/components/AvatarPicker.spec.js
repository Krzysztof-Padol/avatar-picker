import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AvatarPicker from './avatarPicker';

describe('AvatarPicker component', () => {
  it('should render default text', () => {
    const avatarPicker = TestUtils.renderIntoDocument(<AvatarPicker/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(avatarPicker, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
