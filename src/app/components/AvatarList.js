import React, {PropTypes} from 'react';
import './AvatarList.scss';

const AvatarList = ({children}) => (
  <ul className="avatar-list">
    {children}
  </ul>
);

AvatarList.propTypes = {
  children: PropTypes.node
};

export default AvatarList;
