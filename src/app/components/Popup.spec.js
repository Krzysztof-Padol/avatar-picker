import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Popup from './popup';

describe('Popup component', () => {
  it('should render default text', () => {
    const popup = TestUtils.renderIntoDocument(<Popup/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(popup, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
