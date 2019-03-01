import React from 'react';
import {PropTypes} from 'prop-types';

const Label = props => {
  return <label className="temis-label">{props.children}</label>;
};

Label.propTypes = {
  children: PropTypes.string,
};

Label.defaultProps = {
  children: 'Etiqueta:',
};

export default Label;
