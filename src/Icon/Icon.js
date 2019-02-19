import React from 'react';
import PropTypes from 'prop-types';

const Icon = () => {
  return <i className="fa fa-spinner" />;
};

Icon.propTypes = {
  size: PropTypes.oneOf (['lg', '2x', '3x', '4x', '5x']),
};

export {Icon as default};
