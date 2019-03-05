import React from 'react';
import {PropTypes} from 'prop-types';

const Label = props => {
  return (
    <label
      className={`temis-label${(props.disabled ? ' temis-label--disabled' : ' ') + props.className}`}
    >
      {props.children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Label.defaultProps = {
  children: 'Etiqueta:',
  disabled: false,
};

export default Label;
