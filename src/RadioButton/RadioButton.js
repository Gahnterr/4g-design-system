import React from 'react';
import Label from '../Label/Label';
import {PropTypes} from 'prop-types';

const RadioButton = props => (
  <Label>
    <input
      className={props.className}
      type="radio"
      name={props.name}
      value={props.value}
      checked={props.checked}
    />
    {props.text}
  </Label>
);

RadioButton.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

RadioButton.defaultProps = {
  text: 'Radio botón (inserta tu texto aquí)',
  checked: false,
  name: 'radio.button.1',
  value: 'radio.button.1',
};

export default RadioButton;
