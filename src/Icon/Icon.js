import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/styles.css';

const Icon = props => {
  let iconColor;
  switch (props.color) {
    case 'texto-regular':
      iconColor = 'var(--texto-regular)';
      break;
    case 'texto-auxiliar':
      iconColor = 'var(--texto-auxiliar';
      break;
    case 'primario':
      iconColor = 'var(--primario-base)';
      break;
    case 'secundario':
      iconColor = 'var(--secundario-base)';
      break;
    case 'error':
      iconColor = 'var(--error)';
      break;
    case 'advertencia':
      iconColor = 'var(--advertencia)';
      break;
    case 'blanco':
      iconColor = 'var(--white)';
      break;
    case 'exito':
      iconColor = 'var(--exito)';
      break;
    default:
      iconColor = 'var(--texto-regular)';
  }

  const stylesIcon = `color: ${iconColor}`;

  return (
    <i
      className={`fa fa-${props.icon} fa-${props.size} ${props.spin ? 'fa-spin' : null} ${props.spin && props.pulse ? 'fa-pulse' : null}`}
      css={stylesIcon}
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
  ]),
  fixedWidth: PropTypes.bool,
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
};

export {Icon as default};
