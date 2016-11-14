import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import './Avatar.scss';
import {ENTER_KEY} from './../constants/KeyTypes';

export default class Avatar extends Component {
  constructor() {
    super();

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === ENTER_KEY) {
      this.handleOnClick();
    }
  }

  handleOnClick() {
    const {avatarId, avatarOnClick} = this.props;

    if (avatarOnClick) {
      avatarOnClick(avatarId);
    }
  }

  render() {
    return (
      <div className="avatar" onClick={this.handleOnClick} onKeyPress={this.handleKeyPress}>
        <img className="avatar__image" src={this.props.imagePath}/>
        <div
          tabIndex="0"
          className={classnames({
            'avatar__border--loading': this.props.loading,
            'avatar__border--current': this.props.current,
            'avatar__border--bold': this.props.bold,
            'avatar__border': true
          })}
          ></div>
      </div>
    );
  }
}

Avatar.defaultProps = {
  imagePath: 'app/components/assets/avatar1.png',
  loading: false,
  current: false,
  bold: false
};

Avatar.propTypes = {
  avatarId: PropTypes.number,
  imagePath: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  current: PropTypes.bool,
  bold: PropTypes.bool,
  avatarOnClick: PropTypes.func
};
