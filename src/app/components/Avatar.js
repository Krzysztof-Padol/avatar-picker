import React, {PropTypes, Component} from 'react';

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

Avatar.defaultProps = {
  text: 'My brand new component!'
};

Avatar.propTypes = {
  text: PropTypes.string
};
