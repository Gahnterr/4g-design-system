import React from 'react';
import {PropTypes} from 'prop-types';

const FlexboxContainer = props => {
  const styles = `
        display: flex;
        flex-direction: ${props.flexDirection};
        flex-wrap: ${props.flexWrap};
        justify-content: ${props.justifyContent};
        align-items: ${props.alignItems};
        align-content: ${props.alignContent};
        width: 100%;
        height: 100%;
    `;

  return <div css={styles}>{props.children}</div>;
};

FlexboxContainer.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf ([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf (['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf ([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  alignItems: PropTypes.oneOf ([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
  ]),
  alignContent: PropTypes.oneOf ([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'space-between',
    'space-around',
  ]),
};

FlexboxContainer.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
};

export default FlexboxContainer;
