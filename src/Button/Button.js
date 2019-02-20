import * as React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import colors from '../styles/colors.json';

const stylesPrimario = `
  color: ${colors.white};
  background-color: ${colors.default.primario.base};
  &:hover {
    background-color: ${colors.default.primario.light};
  }
  &:active {
    background-color: ${colors.default.primario.dark};
  }
  &:disabled {
    background-color: ${colors.default.primario.base};
  }
`;

const stylesSecundario = `
  color: ${colors.default.primario.base};
  background-color: ${colors.white};
  border: solid 1px ${colors.default.primario.base};
  &:hover {
    color: ${colors.default.primario.light};
    border-color: ${colors.default.primario.light};
  }
  &:active {
    color: ${colors.default.primario.dark};
    border-color: ${colors.default.primario.dark};
  }
`;

const styles = type => {
  return type === 'primario'
    ? stylesPrimario
    : type === 'secundario' ? stylesSecundario : null;
};

const Button = props => {
  return (
    <button
      className="button"
      type="button"
      css={styles (props.type)}
      {...props}
    >
      {props.icon
        ? <Icon
            icon={props.icon}
            size={props.iconSize}
            spin={props.iconSpin}
            pulse={props.iconPulse}
            color={
              props.type === 'primario'
                ? 'blanco'
                : props.type === 'secundario' ? 'secundario' : null
            }
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
  type: PropTypes.oneOf (['primario', 'secundario']),
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
