import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from '../Icon/Icon';

const Back = () => {
  return (
    <button className="btn btn--regresar">
      <Icon className="btn__icono--regresar" icon="arrow-left" color="blanco" />
    </button>
  );
};

export default Back;
