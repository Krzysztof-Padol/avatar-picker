import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AvatarList from './avatarList';

describe('AvatarList component', () => {
  it('should render default text', () => {
    const avatarList = TestUtils.renderIntoDocument(<AvatarList/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(avatarList, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
