import React from 'react';
import {PropTypes} from 'prop-types';

const Text = props => {
  return (
    <p
      css={`text-align: ${props.align}; color: ${props.color}; font-size: ${props.fontSize}; font-weight: ${props.fontWeight}`}
      {...props}
    >
      {props.children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf (['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  whiteSpace: PropTypes.oneOf ([
    'normal',
    'nowrap',
    'pre',
    'pre-line',
    'pre-wrap',
    'initial',
    'inherit',
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Text.defaultProps = {
  children: 'Aquí va tu texto...',
  align: 'left',
  whiteSpace: 'initial',
};

export {Text as default};
