import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/styles.css';

const Icon = props => {
  const getIconColor = () => {
    const c = props.color;
    let r = 'color: ';

    if (c === 'none' || props.className) {
      r = ''; // Si prop.color tiene valor "none", no regresará ningún color al CSS, permitiendo cambiar el color por medio de prop.className o el atributo style.
    } else if (c === 'texto-regular') {
      r += 'var(--texto-regular)';
    } else if (c === 'texto-auxiliar') {
      r += 'var(--texto-auxiliar)';
    } else if (c === 'primario') {
      r += 'var(--primario-base)';
    } else if (c === 'secundario') {
      r += 'var(--secundario-base)';
    } else if (c === 'error') {
      r += 'var(--error)';
    } else if (c === 'advertencia') {
      r += 'var(--advertencia)';
    } else if (c === 'blanco') {
      r += 'var(--white)';
    } else if (c === 'exito') {
      r += 'var(--exito)';
    }

    return r;
  };

  return (
    <i
      className={`fa fa-${props.icon} fa-${props.size} ${props.rotate !== 'normal' ? 'fa-rotate-' + props.rotate : ''} ${props.flip !== 'normal' ? 'fa-flip-' + props.flip : ''} ${props.spin ? 'fa-spin' : ''} ${props.spin && props.pulse ? 'fa-pulse' : ''} ${props.className}`}
      css={getIconColor ()}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf (['lg', '2x', '3x', '4x', '5x']),
  color: PropTypes.oneOf ([
    'texto-regular',
    'texto-auxiliar',
    'primario',
    'secundario',
    'error',
    'advertencia',
    'exito',
    'blanco',
    'none',
  ]),
  fixedWidth: PropTypes.bool,
  rotate: PropTypes.oneOf (['normal', '90', '180', '270']),
  flip: PropTypes.oneOf (['normal', 'horizontal', 'vertical']),
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
  className: PropTypes.string,
};

Icon.defaultProps = {
  icon: 'fa',
  size: 'lg',
  color: 'texto-regular',
  rotate: 'normal',
  flip: 'normal',
};

export {Icon as default};
