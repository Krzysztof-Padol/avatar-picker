import React, {PropTypes, Component} from 'react';
import './Popup.scss';

const CSS_CLASS = 'popup';
const CSS_CLASS_OPENED = ' popup--opened';
const CSS_CLASS_TOUCHED = 'popup--touched';

export default class Popup extends Component {
  constructor() {
    super();

    this.state = {
      opened: false,
      popupClass: CSS_CLASS
    };

    this.handleToogle = this.handleToogle.bind(this);
  }

  handleToogle() {
    this.setState({
      opened: !this.state.opened,
      popupClass: this.state.popupClass === CSS_CLASS ? `${this.state.popupClass} ${CSS_CLASS_TOUCHED}` : this.state.popupClass
    });
  }

  render() {
    let popupClass = this.state.popupClass;

    if (this.state.opened) {
      popupClass += CSS_CLASS_OPENED;
    }

    return (
      <div className="popup__container">
        <div className="popup__refElement" onClick={this.handleToogle}>
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
  children: PropTypes.node,
  triggerElement: PropTypes.node.isRequired
};
