import React from 'react';
import ModalFooter from '../ModalFooter';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import CSSGridContainer from './../../CSSGridContainer/CSSGridContainer';
import CSSGridItem from './../../CSSGridItem/CSSGridItem';

export default (
  <ModalFooter uxpId="modal.footer.1">
    <CSSGridContainer uxpId="cssgrid.container.1">
      <CSSGridItem uxpId="cssgrid.item.1">
        <Button uxpId="button.primario.1" type="primario">
          Acción primaria
        </Button>
        <Button uxpId="button.secundario.1" type="secundario">
          Acción secundaria
        </Button>
      </CSSGridItem>
      <CSSGridItem uxpId="cssgrid.item.2">
        <Link uxpId="link.1">Regresar</Link>
      </CSSGridItem>
    </CSSGridContainer>
  </ModalFooter>
);
