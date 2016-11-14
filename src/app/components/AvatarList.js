import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Avatar from './Avatar';
import './AvatarList.scss';

class AvatarList extends Component {
  render() {
    const {avatars} = this.props;
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

AvatarList.propTypes = {
  avatars: PropTypes.array.isRequired,
  avatarPickerState: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func
};

function mapStateToProps(state) {
  return {
    avatars: state.avatars,
    avatarPickerState: state.avatarPickerState
  };
}

export default connect(
  mapStateToProps,
  null
)(AvatarList);
