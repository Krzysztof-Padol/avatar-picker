import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as AvatarActions from '../actions/index';
import Avatar from './Avatar';
import './AvatarList.scss';

class AvatarList extends Component {
  render() {
    const {avatars, avatarPickerState, changeAvatar} = this.props;

    return (
      <ul className="avatar-list">
        {avatars.map(avatar =>
          <li key={avatar.id}>
            <Avatar
              bold
              avatarId={avatar.id}
              current={avatar.id === avatarPickerState.currentAvatarId}
              loading={avatar.id === avatarPickerState.requestPendingId}
              avatarOnClick={changeAvatar}
              imagePath={avatar.src}
              />
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

function mapDispatchToProps(dispatch) {
  return {
    changeAvatar: AvatarActions.changeAvatar(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarList);
