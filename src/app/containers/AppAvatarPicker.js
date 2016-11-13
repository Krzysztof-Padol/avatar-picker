import React, {Component} from 'react';
import Avatar from '../components/Avatar';

export default class AppAvatarPicker extends Component {
  render() {
    return (
      <div>
        <Avatar/>
        <Avatar bold/>
        <Avatar loading/>
        <Avatar current/>
      </div>
    );
  }
}
