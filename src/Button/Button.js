import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';

const Button = props => {
  return (
    <button className={`btn btn--${props.type}`} type="button">
      {props.icon || props.type === 'terciario'
        ? <Icon
            className={`btn__icono btn__icono--${props.type}`}
            color="none"
            icon={props.icon}
            size={props.iconSize}
            spin={props.iconSpin}
            pulse={props.iconPulse}
          />
        : null}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Cuál será el tipo del botón:
   * Primario: Botón para acciones principales. Tiene mayor importancia jerárquica.
   * Secundario: Botón para acciones secundarios y menor importancia jerárquica.
   */
  type: PropTypes.oneOf (['primario', 'secundario', 'terciario']),
  /**
   * Texto dentro del botón.
   */
  children: PropTypes.string,
  /**
   * Interacción al hacer clic en el botón.
   */
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf (['lg', '2x', '3x', '4x', '5x']),
  iconSpin: PropTypes.bool,
  iconPulse: PropTypes.bool,
  /**
   * Indica si el botón se encuentra deshabilitado o no. Si está deshabilitado, no funcionarán sus 
   */
  disabled: PropTypes.bool,
};

export {Button as default};
