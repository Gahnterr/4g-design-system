import React from 'react';
import {PropTypes} from 'prop-types';

const ProcessButton = props => {
  return (
    <button
      className={'btn btn--proceso' + props.className}
      style={props.style}
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

ProcessButton.propTypes = {
  /** Indica el texto dentro del botón. */
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  /** Agrega más estilos o reemplázalos escribiendo una clase de css que exista dentro de la hoja de estilos. */
  className: PropTypes.string,
  /** Agrega tus propios estilos o reemplaza los existentes directamente desde este prop.
   * Debes escribir los estilos con formato JSON y utilizar los nombres de las propiedades del DOM, no de CSS3.
   * 
   * Ejemplo:
   * {
   *  "padding": "20px",
   *  "minWidth": "unset",
   *  "backgrounColor": "#6B6B6B"
   * }
   */
  style: PropTypes.object,
};

ProcessButton.defaultProps = {
  children: 'Proceso',
  disabled: false,
};

export default ProcessButton;
