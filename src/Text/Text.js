import React from 'react';
import {PropTypes} from 'prop-types';

const Text = props => {
  return <p className={props.className}>{props.children}</p>;
};

Text.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf (['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
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
};

Text.defaultProps = {
  children: 'Aquí va tu texto...',
  align: 'left',
  whiteSpace: 'initial',
};

export {Text as default};
