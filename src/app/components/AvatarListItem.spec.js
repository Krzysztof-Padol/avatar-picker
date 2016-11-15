import React from 'react';
import {shallow} from 'enzyme';
import AvatarListItem from './avatarListItem';

describe('AvatarListItem component', () => {
  it('should contain li element', () => {
    const component = shallow(
      <AvatarListItem/>
    );
    expect(component.containsMatchingElement(
      <li></li>
    )).toEqual(true);
  });

  it('should render children in li', () => {
    const exampleTxt = 'That is example text';
    const component = shallow(
      <AvatarListItem>{exampleTxt}</AvatarListItem>
    );
    expect(component.containsMatchingElement(
      <li>{exampleTxt}</li>
    )).toEqual(true);
  });
});
