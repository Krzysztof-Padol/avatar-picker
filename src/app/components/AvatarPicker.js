import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Avatar from './Avatar';
import Popup from './Popup';
import AvatarList from './AvatarList';

class AvatarPicker extends Component {
  render() {
    const {opened, currentAvatar} = this.props;

    return (
      <Popup triggerElement={<Avatar active={opened} imagePath={currentAvatar.src}/>}>
        <AvatarList/>
      </Popup>
    );
  }
}

AvatarPicker.propTypes = {
  currentAvatar: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    currentAvatar: state.avatars.find(avatar => avatar.id === state.avatarPickerState.currentAvatarId),
    opened: state.avatarPickerState.popupOpen
  };
}

export default connect(
  mapStateToProps,
  null
)(AvatarPicker);
