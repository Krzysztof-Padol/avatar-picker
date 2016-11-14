import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AvatarActions from '../actions/index';
import {ENTER_KEY} from './../constants/KeyTypes';
import './Popup.scss';

const CSS_CLASS = 'popup';
const CSS_CLASS_OPENED = ' popup--opened';
const CSS_CLASS_TOUCHED = 'popup--touched';

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      popupClass: CSS_CLASS
    };

    this.handleToogle = this.handleToogle.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === ENTER_KEY) {
      this.togglState();
    }
  }

  togglState(value) {
    const {openPopup, closePopup} = this.props.actions;

    if (value === false || this.props.opened) {
      closePopup();
    } else {
      openPopup();
    }

    this.setState({
      popupClass: this.state.popupClass === CSS_CLASS ? `${this.state.popupClass} ${CSS_CLASS_TOUCHED}` : this.state.popupClass
    });
  }

  handleToogle() {
    this.togglState();
  }

  handleHide() {
    this.togglState(false);
  }

  render() {
    let popupClass = this.state.popupClass;

    if (this.props.opened) {
      popupClass += CSS_CLASS_OPENED;
    }

    return (
      <div className="popup__container">
        <div className="popup__backdrop" onClick={this.handleHide}></div>
        <div className="popup__refElement" onClick={this.handleToogle} onKeyPress={this.handleKeyPress}>
          {this.props.triggerElement}
        </div>
        <div className={popupClass}>
          <div className="popup__arrow"></div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Popup.defaultProps = {
  children: 'My brand new component!'
};

Popup.propTypes = {
  opened: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.node,
  triggerElement: PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return {
    opened: state.avatarPickerState.popupOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AvatarActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
