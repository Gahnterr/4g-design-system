import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from '../../src/Icon/Icon';

const ModalHeader = props => {
  return (
    <div className="temis-modal__header">
      <h1 className="temis-modal__header__title">{props.title}</h1>
      <div className="temis-modal__header__close" onClick={props.onClose}>
        <Icon icon="times" color="blanco" size="lg" />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalHeader;
