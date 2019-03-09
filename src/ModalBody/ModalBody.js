import React from 'react';
import {PropTypes} from 'prop-types';

const ModalBody = props => {
  return (
    <div className={'temis-modal__body ' + props.className}>
      {props.children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalBody;
