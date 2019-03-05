import React from 'react';
import {PropTypes} from 'prop-types';

const FlexboxItem = props => {
  const styles = `
        order: ${props.order};
        flex-grow: ${props.flexGrow};
        flex-shrink: ${props.flexShrink};
        flex-basis: ${props.flexBasis};
        align-self: ${props.alignSelf};
        width: 100%;
        height: 100%;
    `;

  return <div css={styles}>{props.children}</div>;
};

FlexboxItem.propTypes = {
  children: PropTypes.node,
  order: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.string,
  alignSelf: PropTypes.oneOf ([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
};

export default FlexboxItem;
