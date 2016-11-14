import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Avatar from '../components/Avatar';
import AvatarList from '../components/AvatarList';
import AvatarListItem from '../components/AvatarListItem';
import * as AvatarActions from '../actions/index';

const AvatarListContainer = ({avatars, avatarPickerState, changeAvatar}) => (
  <AvatarList>
    {avatars.map(avatar =>
      <AvatarListItem key={avatar.id}>
        <Avatar
          bold
          avatarId={avatar.id}
          current={avatar.id === avatarPickerState.currentAvatarId}
          loading={avatar.id === avatarPickerState.requestPendingId}
          avatarOnClick={changeAvatar}
          imagePath={avatar.src}
          />
      </AvatarListItem>
    )}
  </AvatarList>
);

AvatarListContainer.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  avatarPickerState: PropTypes.object.isRequired,
  changeAvatar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  avatars: state.avatars,
  avatarPickerState: state.avatarPickerState
});

const mapDispatchToProps = dispatch => ({
  changeAvatar: AvatarActions.changeAvatar(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarListContainer);
