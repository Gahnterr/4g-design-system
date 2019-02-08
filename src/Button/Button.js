import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';

const stylesCommon = `
  display: flex;
  min-width: 150px;
  width: auto;
  max-width: 250px;
  height: 40px;
  justify-content: center;
  border-radius: 5px;
  border: none;
  font-family: ${typography.fontFamily};
  font-size: ${typography.size.m}px;
  font-weight: ${typography.weight.medium};
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  cursor: default;
  transition: all ease-in 350ms;
  &:hover {
    transition: all ease-out 100ms;
  }
  &:disabled {
    opacity: 0.5;
    transition: all linear 250ms;
  }
`;

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
  return (
    stylesCommon +
    (type === 'primario'
      ? stylesPrimario
      : type === 'secundario' ? stylesSecundario : null)
  );
};

const Button = props => {
  return (
    <button type="button" css={styles (props.type)} {...props}>
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
  /**
   * Indica si el botón se encuentra deshabilitado o no. Si está deshabilitado, no funcionarán sus 
   */
  disabled: PropTypes.bool,
};

export {Button as default};
