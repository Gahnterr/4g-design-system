import React from 'react';
import {PropTypes} from 'prop-types';

const ModalFooter = props => {
  return (
    <div
      className={'temis-modal__footer ' + props.className}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalFooter;
