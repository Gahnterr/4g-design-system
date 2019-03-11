import React from 'react';
import Modal from '../Modal';
import ModalHeader from '../../ModalHeader/ModalHeader';
import ModalBody from '../../ModalBody/ModalBody';
import ModalFooter from './../../ModalFooter/ModalFooter';
import CSSGridContainer from './../../CSSGridContainer/CSSGridContainer';
import CSSGridItem from './../../CSSGridItem/CSSGridItem';
import Link from '../../Link/Link';
import Button from '../../Button/Button';

export default (
  <Modal uxpId="modal.1">
    <ModalHeader uxpId="modal.header.1" title="Encabezado del modal" />
    <ModalBody uxpId="modal.body.1">
      Cuerpo del modal. Escribe texto aquí, o bien, agrega más componentes de código a este cuerpo.
    </ModalBody>
    <ModalFooter uxpId="modal.footer.1">
      <CSSGridContainer
        uxpId="cssgrid.container.1"
        display="grid"
        autoHeight={false}
        gridTemplateColumns="1fr auto auto"
        gridColumnGap="10px"
      >
        <CSSGridItem uxpId="cssgrid.item.1" alignSelf="center" gridArea=" ">
          <Link uxpId="link.1" size="regular">Regresar</Link>
        </CSSGridItem>
        <CSSGridItem uxpId="cssgrid.item.2" gridArea=" ">
          <Button uxpId="button.secundario.1" type="secundario">
            Acción secundaria
          </Button>
        </CSSGridItem>
        <CSSGridItem uxpId="cssgrid.item.3" gridArea=" ">
          <Button uxpId="button.primario.1" type="primario">
            Aceptar
          </Button>
        </CSSGridItem>
      </CSSGridContainer>
    </ModalFooter>
  </Modal>
);
