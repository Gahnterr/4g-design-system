import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';
import '../styles/styles.css';

const styles = (size, disabled) => `
    font-family: ${typography.fontFamily};
    font-size: ${size === 'regular' ? typography.size.l : size === 'compacto' ? typography.size.m : null}px;
    font-weight: ${typography.weight.regular};
    white-space: nowrap;
    color: ${colors.default.secundario.base};
    opacity: ${disabled ? 0.5 : 1.0};
    text-decoration: underline;
    pointer-events: ${disabled ? 'none' : 'default'};
    cursor: ${disabled ? 'default' : 'pointer'};

    &:hover {
        color: ${colors.default.secundario.light};
    }

    &:active {
        color: ${colors.default.secundario.dark};
    }
`;

const Link = props => {
  return (
    <a className="link" css={styles (props.size, props.disabled)} {...props}>
      {props.children}
    </a>
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
