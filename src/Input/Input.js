import React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';

const Input = props => {
  const styles = `
    height: 35px;
    color: ${colors.constantes.texto.regular};

    &[type=color] {
      height: ${props.colorHeight};
    }
  `;

  return (
    <input
      css={styles}
      type={props.type}
      disabled={props.disabled}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      value={props.value}
      readonly={props.readonly}
      pattern={props.pattern}
      width={props.width}
      height={props.width}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf ([
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  pattern: PropTypes.string,
  autoComplete: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  placeholder: 'placeholder',
  width: 250,
  height: 35,
};

export {Input as default};
