import React from 'react';
import ModalFooter from '../ModalFooter';
import Button from '../../Button/Button';
import Link from '../../Link/Link';
import CSSGridContainer from './../../CSSGridContainer/CSSGridContainer';
import CSSGridItem from './../../CSSGridItem/CSSGridItem';

export default (
  <ModalFooter uxpId="modal.footer.1">
    <CSSGridContainer
      uxpId="cssgrid.container.1"
      display="grid"
      autoHeight={false}
      gridTemplateColumns="1fr auto auto"
      gridColumnGap="10px"
    >
      <CSSGridItem uxpId="cssgrid.item.1" alignSelf="center" gridArea="">
        <Link uxpId="link.1" size="regular">Regresar</Link>
      </CSSGridItem>
      <CSSGridItem uxpId="cssgrid.item.2" gridArea="">
        <Button uxpId="button.secundario.1" type="secundario">
          Acción secundaria
        </Button>
      </CSSGridItem>
      <CSSGridItem uxpId="cssgrid.item.3" gridArea="">
        <Button uxpId="button.primario.1" type="primario">
          Aceptar
        </Button>
      </CSSGridItem>
    </CSSGridContainer>
  </ModalFooter>
);
