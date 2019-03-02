import React from 'react';
import {PropTypes} from 'prop-types';

const DropdownItem = props => {
  return (
    <li
      className={`temis-dropdown__item${props.disabled ? ' temis-dropdown__item--disabled' : ''}`}
      onClickCapture={props.onClick}
      key={props.key}
    >
      {props.children}
    </li>
  );
};

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  key: PropTypes.string,
};

export default DropdownItem;
