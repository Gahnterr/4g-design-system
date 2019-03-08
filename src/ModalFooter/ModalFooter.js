import React from 'react';
import {PropTypes} from 'prop-types';

const ModalFooter = props => {
  return (
    <div className="temis-modal__footer">
      {props.children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
