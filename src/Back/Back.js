import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from '../Icon/Icon';

const Back = props => {
  return (
    <button className="btn btn--regresar" type="button" onClick={props.onClick}>
      <Icon
        className="btn__icono--regresar"
        icon="arrow-left"
        color="blanco"
        size={null}
      />
    </button>
  );
};

Back.propTypes = {
  onClick: PropTypes.func,
};

export default Back;
