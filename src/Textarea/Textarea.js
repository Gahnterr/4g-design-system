import React from 'react';
import {PropTypes} from 'prop-types';

export default class Textarea extends React.Component {
  state = {error: this.props.error, value: ''};

  handleBlur = () => {
    if (this.props.required) {
      this.setState ({error: this.state.value ? false : true});
    }
    this.props.onBlur;
  };

  handleChange = e => {
    this.props.onChange;
    this.setState ({value: e.target.value});
  };

  toError = () => {
    this.setState ({error: true});
  };

  toNeutral = () => {
    this.setState ({error: false});
  };

  render () {
    const props = this.props;
    const state = this.state;

    return (
      <React.Fragment>
        {props.label
          ? <label className="form-label texto-regular">
              {props.label}
            </label>
          : null}
        <textarea
          className={`textarea texto-regular${state.error ? ' textarea--error' : ''}`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={state.value}
          {...props}
        >
          {props.children}
        </textarea>
      </React.Fragment>
    );
  }
}

Textarea.propTypes = {
  /** 
   * El texto que aparecerá como etiqueta. Si se deja vacío, la etiqueta no será renderizada.
  */

  label: PropTypes.string,
  /** 
   * Interacción que se ejecutará al cambiar el valor del input.
  */

  onChange: PropTypes.func,
  /** 
   * Interacción que se ejecutará al hacer clic sobre el text area.
  */

  onClick: PropTypes.func,
  /** 
   * Interacción que se ejecutará al hacer enfoque sobre el text area.
  */

  onFocus: PropTypes.func,
  /** 
   * Interacción que se ejecutará al remover el enfoque sobre el text area.
  */

  onBlur: PropTypes.func,
  /** 
   * Si se activa, se enfocará automáticamente este text area.
   * Sólo debe haber 1 elemento con esta propiedad activa para que funcione.
  */

  autofocus: PropTypes.bool,
  /** 
   * Define si se mostrará deshabilitado o no.
  */

  disabled: PropTypes.bool,
  /** 
   * Define si se mostrará el text area con formato de error o no.
  */

  error: PropTypes.bool,
  /** 
   * Número máximo de caracteres que aceptará el text area.
   * Si se deja en 0, no habrá límite de caracteres.
  */

  maxlength: PropTypes.number,
  /** 
   * El texto que aparece cuando no tiene valor el text area.
  */

  placeholder: PropTypes.string,
  /** 
   * Indica que el text area es de sólo lectura, no se podrá modificar su contenido.
  */

  readonly: PropTypes.bool,
  /** 
   * Indica que este text area es requerido. Debe tener al menos 1 caracter, de otra manera, se muestra con formato de error.
  */

  required: PropTypes.bool,
  /** 
   * Altura del text area según el número de líneas de texto que se quieren mostrar a la vez.
   * Si el texto crece más que el alto del text area, se mostrará automáticamente una barra de desplazamiento.
  */

  rows: PropTypes.number,
};

Textarea.defaultProps = {
  label: 'Etiqueta:',
  placeholder: 'Máximo 150 caracteres...',
  rows: 3,
};
