import React, {Component} from 'react';
import Avatar from '../components/Avatar';
import Popup from '../components/Popup';

export default class AppAvatarPicker extends Component {
  render() {
    const divStyle = {
      margin: '100px 150px'
    };

    return (
      <div style={divStyle}>
        <Popup triggerElement={<Avatar/>}>
          <Avatar/>
          <Avatar bold/>
          <Avatar loading/>
          <Avatar current/>
        </Popup>
      </div>
    );
  }
}
