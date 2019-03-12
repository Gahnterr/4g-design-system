import React from 'react';
import {PropTypes} from 'prop-types';

const Image = props => {
  return <img {...props} />;
};

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
