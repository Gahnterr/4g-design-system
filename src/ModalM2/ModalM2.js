import React from 'react';
import Modal from '../Modal/Modal';
import ModalBody from './../ModalBody/ModalBody';
import ModalFooter from './../ModalFooter/ModalFooter';
import CSSGridContainer from './../CSSGridContainer/CSSGridContainer';
import CSSGridItem from './../CSSGridItem/CSSGridItem';
import Link from '../Link/Link';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import {PropTypes} from 'prop-types';

const ModalM2 = props => {
  const getType = type => {
    if (type === 'exito') {
      return {icon: 'check-circle', color: 'exito'};
    } else if (type === 'advertencia') {
      return {icon: 'exclamation-circle', color: 'advertencia'};
    } else if (type === 'error') {
      return {icon: 'times-circle', color: 'error'};
    }
  };

  return (
    <Modal className="temis-modal--m2">
      <ModalBody className="temis-modal__body--m2">
        <Icon
          icon={getType (props.type).icon}
          color={getType (props.type).color}
          size="4x"
          style={{
            display: 'block',
            width: '100%',
            height: '62px',
            textAlign: 'center',
            marginBottom: '17px',
            fontSize: '62px',
          }}
        />
        {props.children}
      </ModalBody>
      <ModalFooter style={{height: '70px', padding: '0 20px'}}>
        <CSSGridContainer
          gridTemplateColumns="1fr auto"
          alignContent="center"
          autoHeight={false}
        >
          <CSSGridItem alignSelf="center">
          {props.type === "error" || props.type === "exito" ? null : <Link onClick={props.handleLink}>Regresar</Link> }
          </CSSGridItem>
          <CSSGridItem>
            <Button onClick={props.handleButton}>Aceptar</Button>
          </CSSGridItem>
        </CSSGridContainer>
      </ModalFooter>
    </Modal>
  );
};

ModalM2.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf (['exito', 'advertencia', 'error']),
  handleLink: PropTypes.func,
  handleButton: PropTypes.func,
};

ModalM2.defaultProps = {
  children: 'Mensaje de modal M2. Texto de ejemplo.',
  type: 'exito',
};

export default ModalM2;
