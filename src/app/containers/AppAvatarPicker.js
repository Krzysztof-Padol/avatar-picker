import React, {Component} from 'react';
import AvatarPicker from '../components/AvatarPicker';

const elementList = [{
  src: 'app/components/assets/avatar1.png',
  label: 'Avatar 1',
  id: 1
}, {
  src: 'app/components/assets/avatar2.png',
  label: 'Avatar 2',
  id: 2
}, {
  src: 'app/components/assets/avatar3.png',
  label: 'Avatar 3',
  id: 3
}, {
  src: 'app/components/assets/avatar4.png',
  label: 'Avatar 4',
  id: 4
}, {
  src: 'app/components/assets/avatar5.png',
  label: 'Avatar 5',
  id: 5
}, {
  src: 'app/components/assets/avatar6.png',
  label: 'Avatar 6',
  id: 6
}];

export default class AppAvatarPicker extends Component {
  render() {
    const divStyle = {
      margin: '100px 150px'
    };

    return (
      <div style={divStyle}>
        <AvatarPicker elements={elementList}/>
      </div>
    );
  }
}
