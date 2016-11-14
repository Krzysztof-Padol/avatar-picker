import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import Avatar from './avatar';

fdescribe('Avatar component', () => {
  const imagePath = "https://example.com/img.png";

  it('should render image', () => {
    const avatar = TestUtils.renderIntoDocument(<Avatar imagePath={imagePath}/>);
    const img = TestUtils.findRenderedDOMComponentWithTag(avatar, 'img');
    expect(img.src).toEqual(imagePath);
  });

  it('should render border', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('.avatar__border').length).toEqual(1);
  });
});
