import React, {PropTypes} from 'react';

const AvatarListItem = ({children}) => (
  <li>
    {children}
  </li>
);

AvatarListItem.propTypes = {
  children: PropTypes.node
};

export default AvatarListItem;
