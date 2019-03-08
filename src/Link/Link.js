import * as React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const Link = props => {
  return (
    <a
      className={`temis-link temis-link--${props.size} ${props.disabled ? 'temis-link--disabled' : null}`}
      {...props}
    >
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
  /** Al activarse, se deshabilita el link. */
  disabled: PropTypes.bool,
};

Link.defaultProps = {
  children: 'Botón tipo link',
  size: 'regular',
};

export {Link as default};
