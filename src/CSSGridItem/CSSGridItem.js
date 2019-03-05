import React from 'react';
import {PropTypes} from 'prop-types';

const CSSGridItem = props => {
  const styles = `
    grid-column-start: ${props.gridColumnStart};
    grid-column-end: ${props.gridColumnEnd};
    grid-row-start: ${props.gridRowStart};
    grid-row-end: ${props.gridRowEnd};
    grid-area: ${props.gridArea};
    justify-self: ${props.justifySelf};
    align-self: ${props.alignSelf};
`;

  return <div css={styles}>{props.children}</div>;
};

CSSGridItem.propTypes = {
  children: PropTypes.node,
  gridColumnStart: PropTypes.string,
  gridColumnEnd: PropTypes.string,
  gridRowStart: PropTypes.string,
  gridRowEnd: PropTypes.string,
  gridArea: PropTypes.string,
  justifySelf: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
  alignSelf: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
};

CSSGridItem.defaultProps = {
  gridArea: 'none',
};

export default CSSGridItem;
