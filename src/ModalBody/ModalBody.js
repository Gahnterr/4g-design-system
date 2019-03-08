import React from 'react';
import {PropTypes} from 'prop-types';

const ModalBody = props => {
  return (
    <div className="temis-modal__body">
      {props.children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
