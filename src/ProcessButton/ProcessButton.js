import React from 'react';
import {PropTypes} from 'prop-types';

const ProcessButton = props => {
  return (
    <button
      className="btn btn--proceso"
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

ProcessButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ProcessButton.defaultProps = {
  children: 'Proceso',
  disabled: false,
};

export default ProcessButton;
