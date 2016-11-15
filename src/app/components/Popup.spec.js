import React from 'react';
import {shallow} from 'enzyme';
import Popup from './popup';
import {ENTER_KEY} from './../constants/KeyTypes';

const setup = (props = {opened: false}) => {
  const actions = {
    openPopup: jasmine.createSpy(),
    closePopup: jasmine.createSpy()
  };

  const component = shallow(
    <Popup {...props} {...actions}/>
  );

  return {
    component,
    actions,
    triggerElement: component.find('.popup__refElement'),
    popupInner: component.find('.popup'),
    backdrop: component.find('.popup__backdrop')
  };
};

describe('Popup component', () => {
  it('should render default text in trigger element container', () => {
    const {triggerElement} = setup();
    expect(triggerElement.contains('Click here!')).toEqual(true);
  });

  it('should render custom text in trigger element container', () => {
    const customText = 'My custom text';
    const {triggerElement} = setup({
      opened: false,
      triggerElement: customText
    });
    expect(triggerElement.contains(customText)).toEqual(true);
  });

  it('should render default text in popup inner container', () => {
    const {popupInner} = setup();
    expect(popupInner.contains('Popup content')).toEqual(true);
  });

  it('should render custom text in popup inner container', () => {
    const customText = 'My custom text';
    const {popupInner} = setup({
      opened: false,
      children: customText
    });
    expect(popupInner.contains(customText)).toEqual(true);
  });

  it('should contain open class if props opened is set to true', () => {
    const {popupInner} = setup({
      opened: true
    });
    expect(popupInner.hasClass('popup--opened')).toEqual(true);
  });

  it('shouldn`t contain open class if props opened is set to true', () => {
    const {popupInner} = setup({
      opened: false
    });
    expect(popupInner.hasClass('popup--opened')).toEqual(false);
  });

  it('should call openPopup when trigger element is clicked and popup is closed', () => {
    const {triggerElement, actions} = setup({
      opened: false
    });
    triggerElement.simulate('click');
    expect(actions.openPopup).toHaveBeenCalled();
  });

  it('should call openPopup when enter is pressed on trigger element and popup is closed', () => {
    const {triggerElement, actions} = setup({
      opened: false
    });
    triggerElement.simulate('keyPress', {
      key: ENTER_KEY
    });
    expect(actions.openPopup).toHaveBeenCalled();
  });

  it('should call closePopup when trigger element is clicked and popup is opened', () => {
    const {triggerElement, actions} = setup({
      opened: true
    });
    triggerElement.simulate('click');
    expect(actions.closePopup).toHaveBeenCalled();
  });

  it('should call close method when popup is opened and there is click on backdrop', () => {
    const {backdrop, actions} = setup({
      opened: true
    });
    backdrop.simulate('click');
    expect(actions.closePopup).toHaveBeenCalled();
  });
});
