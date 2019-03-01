import React from 'react';
import {PropTypes} from 'prop-types';

const SelectlistItem = props => {
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

SelectlistItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  key: PropTypes.string,
};

export default SelectlistItem;
