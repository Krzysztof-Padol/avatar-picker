import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Avatar from '../components/Avatar';
import AvatarListContainer from './AvatarListContainer';
import * as AvatarActions from '../actions/index';
import Popup from '../components/Popup';

const AvatarContainer = ({actions, currentAvatar, opened}) => (
  <Popup
    opened={opened}
    openPopup={actions.openPopup}
    closePopup={actions.closePopup}
    triggerElement={
      <Avatar
        active={opened}
        imagePath={currentAvatar.src}
        />
      }
    >
    <AvatarListContainer/>
  </Popup>
);

AvatarContainer.propTypes = {
  actions: PropTypes.shape({
    openPopup: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired
  }),
  currentAvatar: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentAvatar: state.avatars.find(avatar => avatar.id === state.avatarPickerState.currentAvatarId),
  opened: state.avatarPickerState.popupOpen
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AvatarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarContainer);
