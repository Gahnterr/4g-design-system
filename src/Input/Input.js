import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label.js';

export default class Input extends Component {
  state = {
    value: this.props.value,
    error: this.props.error,
  };

  handleChange = e => {
    this.setState ({value: e.target.value});
  };

  render () {
    const props = this.props;
    const state = this.state;

    return (
      <React.Fragment>
        {props.label
          ? <Label disabled={props.disabled ? true : false}>
              {props.label}
            </Label>
          : null}
        <input
          className={`temis-input ${(state.error ? 'temis-input--error' : '') + props.className}`}
          onChange={props.onChange}
          onClick={props.onClick}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          type={props.type}
          disabled={props.disabled}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          value={props.value}
          readonly={props.readonly}
        />
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  /**
   * Define el texto de la etiqueta que acompaña al input.
   */
  label: PropTypes.string,
  /**
   * Elige el tipo de input que quieres.
   *
   * Checkbox: Se convierte en un checkbox.
   * Color: Selector de colores.
   * Date: Selector de fecha.
   * Datetime-local: Selector de fecha con tiempo local.
   * Email: Le dice al navegador que aquí se puede autointroducir correos electrónicos guardados.
   * File: Selector de archivos locales.
   * Hidden: Esconde el input.
   * Image: Selector de imágenes locales.
   * Month: Selector de fecha por mes.
   * Number: Permite introducir únicamente números. También agrega unas flechas para aumentar o disminuir el número por pasos.
   * Password: Oculta el valor introducido en el input. Si se usa junto con un input tipo "email", se mostrará el autocompletado de credenciales del navegador.
   * Radio: Se convierte en un botón de radio.
   * Range: Se convierte en un deslizador de rango numérico.
   * Reset: Se convierte en un botón de restablecimiento de formas.
   * Search: Le da formato de campo de búsqueda y habilita una "X" para limpiar el campo de búsqueda.
   * Tel: Le da formato de número telefónico al valor introducido. Sólo permite agregar números telefónicos.
   * Text: Permite introducir texto y números.
   * Time: Selector de hora.
   * Url: Permite validar una URL.
   * Week: Selector de fecha por semana.
   */
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  /**
   * Indica si el input tendrá un formato de error.
   */
  error: PropTypes.bool,
  /**
   * Indica si el input aparecerá deshabilitado. No se podrá introducir o cambiar los valores introducidos.
   */
  disabled: PropTypes.bool,
  /**
   * Indica el texto que aparecerá como placeholder (cuando se encuentre vacío el input).
   */
  placeholder: PropTypes.string,
  /**
   * No permite modificar el texto agregado, pero permanece con su formato regular, como si no estuviera deshabilitado.
   */
  readonly: PropTypes.bool,
  /**
   * Ingresa un patrón regex (Regular expressions) para validar y restringir los valores introducidos según un patrón.
   * Es útil si sólo se permite ingresar cierta cantidad de caracteres, ciertos caracteres o cierta combinación de caracteres.
   */
  regex: PropTypes.object,
  /**
   * Le indica al navegador que se permitirá el autocompletado de información.
   */
  autoComplete: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: 'Etiqueta:',
  type: 'text',
  disabled: false,
  placeholder: 'Placeholder',
};
