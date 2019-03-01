import React from 'react';
import {PropTypes} from 'prop-types';

const Dropdown = props => {
  return props.isOpen
    ? <ul className="temis-dropdown">
        {props.children}
      </ul>
    : null;
};

Dropdown.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

export default Dropdown;
