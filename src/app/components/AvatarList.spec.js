import React from 'react';
import {shallow} from 'enzyme';
import AvatarList from './avatarList';

describe('AvatarList component', () => {
  it('should have proper class name', () => {
    const component = shallow(
      <AvatarList/>
    );
    expect(component.hasClass('avatar-list')).toEqual(true);
  });

  it('should render children', () => {
    const exampleTxt = 'That is example text';
    const component = shallow(
      <AvatarList>{exampleTxt}</AvatarList>
    );
    expect(component.contains(exampleTxt)).toEqual(true);
  });
});
