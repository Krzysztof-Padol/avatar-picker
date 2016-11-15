import React from 'react';
import {shallow} from 'enzyme';
import Avatar from './avatar';
import {ENTER_KEY} from './../constants/KeyTypes';

const setup = props => {
  const actions = {
    avatarOnClick: jasmine.createSpy()
  };

  const component = shallow(
    <Avatar {...props} {...actions}/>
  );

  return {
    component,
    actions,
    img: component.find('img'),
    border: component.find('.avatar__border')
  };
};

describe('Avatar component', () => {
  const imagePath = "https://example.com/img.png";

  it('should render image', () => {
    const {img} = setup({
      imagePath
    });
    expect(img.prop('src')).toEqual(imagePath);
  });

  it('should render border', () => {
    const {component} = setup();
    expect(component.find('.avatar__border').length).toEqual(1);
  });

  it('should have bold border class if it has got bold prop', () => {
    const {border} = setup({
      bold: true
    });
    expect(border.hasClass('avatar__border--bold')).toEqual(true);
  });

  it('should have active border class if it has got active prop', () => {
    const {border} = setup({
      active: true
    });
    expect(border.hasClass('avatar__border--active')).toEqual(true);
  });

  it('should have current border class if it has got current prop', () => {
    const {border} = setup({
      current: true
    });
    expect(border.hasClass('avatar__border--current')).toEqual(true);
  });

  it('should have loading border class if it has got loading prop', () => {
    const {border} = setup({
      loading: true
    });
    expect(border.hasClass('avatar__border--loading')).toEqual(true);
  });

  it('should call avatarOnClick with id of avatar in args when avatar is clicked', () => {
    const avatarId = 123234123;
    const {component, actions} = setup({
      avatarId
    });
    component.simulate('click');
    expect(actions.avatarOnClick).toHaveBeenCalledWith(avatarId);
  });

  it('should call avatarOnClick with id of avatar in args when ENTER key is pressed', () => {
    const avatarId = 123234123;
    const {component, actions} = setup({
      avatarId
    });
    component.simulate('keyPress', {
      key: ENTER_KEY
    });
    expect(actions.avatarOnClick).toHaveBeenCalledWith(avatarId);
  });
});
