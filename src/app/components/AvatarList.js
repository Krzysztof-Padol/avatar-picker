import React, {PropTypes, Component} from 'react';
import Avatar from './Avatar';
import './AvatarList.scss';

export default class AvatarList extends Component {
  render() {
    const avatars = [{
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

    return (
      <ul className="avatar-list">
        {avatars.map(avatar =>
          <li key={avatar.id}>
            <Avatar bold imagePath={avatar.src}/>
          </li>
        )}
      </ul>
    );
  }
}

AvatarList.defaultProps = {
  text: 'My brand new component!'
};

AvatarList.propTypes = {
  text: PropTypes.string
};
