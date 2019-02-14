import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';
import '../styles/font.css';

const styles = (size, disabled) => `
    display: flex;
    width: fit-content;
    font-family: ${typography.fontFamily};
    font-size: ${size === 'regular' ? typography.size.l : size === 'compacto' ? typography.size.m : null}px;
    font-weight: ${typography.weight.regular};
    color: ${colors.default.secundario.base};
    opacity: ${disabled ? 0.5 : 1.0};
    text-decoration: underline;
    &:hover {
        color: ${colors.default.secundario.light};
    }
    &:active {
        color: ${colors.default.secundario.dark};
    }
    pointer-events: ${disabled ? 'none' : 'default'};
    cursor: ${disabled ? 'default' : 'pointer'};
`;

const Link = props => {
  return (
    <a css={styles (props.size, props.disabled)} {...props}>{props.children}</a>
  );
};

Link.propTypes = {
  /**
   * Texto del link.
   */
  children: PropTypes.string,
  /**
   * Interacción al hacer clic en el link.
   */
  onClick: PropTypes.func,
  /**
   * En caso que se requiera o desee que el link te lleve a otra página, introduzca el valor href.
   * Nota: si se agrega un valor a href, las interacciones de onClick no harán efecto.
   */
  href: PropTypes.string,
  /**
   * Define el tamaño del texto del link.
   */
  size: PropTypes.oneOf (['compacto', 'regular']),
  disabled: PropTypes.bool,
};

export {Link as default};
