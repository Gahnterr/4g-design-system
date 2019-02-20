import React from 'react';
import {PropTypes} from 'prop-types';
import colors from '../styles/colors.json';
import '../styles/styles.css';

export default class Textarea extends React.Component {
  state = {error: this.props.error};

  styling = (props, state) => {
    const stylesLabel = `
      opacity: ${props.disabled ? '0.5' : '1.0'};
    `;

    const stylesTextarea = `
      border: solid 1px ${state.error ? colors.constantes.error : null};

      &:focus {
        border: solid 1px ${state.error ? colors.constantes.error : null};
      }
    `;

    return {stylesLabel, stylesTextarea};
  };

  render () {
    const props = this.props;
    const state = this.state;
    const {stylesLabel, stylesTextarea} = this.styling (props, state);

    return (
      <React.Fragment>
        {props.label
          ? <label css={stylesLabel} className="label texto-regular">
              {props.label}
            </label>
          : null}
        <textarea
          css={stylesTextarea}
          className="textarea texto-regular"
          onClick={props.onClick}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          autofocus={props.autofocus}
          disabled={props.disabled}
          error={props.error}
          form={props.form}
          maxlength={props.maxlength}
          name={props.name}
          placeholder={props.placeholder}
          readonly={props.readonly}
          required={props.required}
          rows={props.rows}
        >
          {props.children}
        </textarea>
      </React.Fragment>
    );
  }
}

Textarea.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  form: PropTypes.string,
  maxlength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  label: 'Etiqueta:',
  placeholder: 'Máximo 150 caracteres...',
  rows: 3,
};
