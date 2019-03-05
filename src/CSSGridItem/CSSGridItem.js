import React from 'react';

const CSSGridItem = props => {
  const styles = `
    grid-column-start: ${props.gridColumnStart};
    grid-column-end: ${props.gridColumnEnd};
    grid-row-start: ${props.gridRowStart};
    grid-row-end: ${props.gridRowEnd};
    grid-column: ${props.gridColumn};
    grid-row: ${props.gridRow};
    grid-area: ${props.gridArea};
`;

  return <div css={styles} />;
};

export default CSSGridItem;
