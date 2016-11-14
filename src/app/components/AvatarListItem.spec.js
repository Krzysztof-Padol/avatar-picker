import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AvatarListItem from './avatarListItem';

describe('AvatarListItem component', () => {
  it('should render default text', () => {
    const avatarListItem = TestUtils.renderIntoDocument(<AvatarListItem/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(avatarListItem, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
