import React from 'react';
import CSSGridContainer from './../CSSGridContainer';
import Text from '../../Text/Text';

export default (
  <CSSGridContainer
    uxpId="cssgrid.container.1"
    display="grid"
    gridTemplateColumns="40px 50px auto 50px 40px"
    gridTemplateRows="25% 100px auto"
  >
    <Text color="#6B6B6B" type="paragraph" align="left">
      CSS Grid Container
    </Text>
  </CSSGridContainer>
);
