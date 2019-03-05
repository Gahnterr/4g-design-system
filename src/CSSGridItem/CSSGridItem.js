import React from 'react';
import {PropTypes} from 'prop-types';

const CSSGridItem = props => {
  const styles = `
    grid-area: ${props.gridArea};
    justify-self: ${props.justifySelf};
    align-self: ${props.alignSelf};
`;

  return <div css={styles}>{props.children}</div>;
};

CSSGridItem.propTypes = {
  children: PropTypes.node,
  gridArea: PropTypes.string,
  justifySelf: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
  alignSelf: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
};

CSSGridItem.defaultProps = {
  gridArea: 'unset',
};

export default CSSGridItem;
