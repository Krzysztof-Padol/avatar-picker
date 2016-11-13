import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Avatar from './avatar';

describe('Avatar component', () => {
  it('should render default text', () => {
    const avatar = TestUtils.renderIntoDocument(<Avatar/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(avatar, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
