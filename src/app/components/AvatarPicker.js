import React, {PropTypes, Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './../store/configureStore';
import Avatar from './Avatar';
import Popup from './Popup';
import AvatarList from './AvatarList';

export default class AvatarPicker extends Component {
  constructor(props) {
    super();
    this.store = configureStore({
      avatars: props.elements
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        <Popup triggerElement={<Avatar/>}>
          <AvatarList/>
        </Popup>
      </Provider>
    );
  }
}

AvatarPicker.propTypes = {
  elements: PropTypes.array
};
