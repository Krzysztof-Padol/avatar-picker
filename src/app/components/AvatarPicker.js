import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Avatar from './Avatar';
import Popup from './Popup';
import AvatarList from './AvatarList';

class AvatarPicker extends Component {
  render() {
    const {currentAvatar} = this.props;

    return (
      <Popup triggerElement={<Avatar imagePath={currentAvatar.src}/>}>
        <AvatarList/>
      </Popup>
    );
  }
}

AvatarPicker.propTypes = {
  currentAvatar: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    currentAvatar: state.avatars.find(avatar => avatar.id === state.avatarPickerState.currentAvatarId)
  };
}

export default connect(
  mapStateToProps,
  null
)(AvatarPicker);
