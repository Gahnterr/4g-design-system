import React from 'react';
import CSSGridContainer from './../CSSGridContainer';
import CSSGridItem from '../../CSSGridItem/CSSGridItem';

export default (
  <CSSGridContainer
    uxpId="cssgrid.container.1"
    autoHeight={true}
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr 1fr"
    gridTemplateRows="auto"
    gridTemplateAreas="none"
    gridColumnGap="20px"
    gridRowGap="20px"
  >
    <CSSGridItem uxpId="cssgrid.item.1" gridArea="initial">
      CSS Grid Item (Columna) 1
    </CSSGridItem>
    <CSSGridItem uxpId="cssgrid.item.2" gridArea="initial">
      CSS Grid Item (Columna) 2
    </CSSGridItem>
    <CSSGridItem uxpId="cssgrid.item.3" gridArea="initial">
      CSS Grid Item (Columna) 3
    </CSSGridItem>
    <CSSGridItem uxpId="cssgrid.item.4" gridArea="initial">
      CSS Grid Item (Columna) 4
    </CSSGridItem>
  </CSSGridContainer>
);
