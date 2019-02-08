import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';

const styles = `
    font-size: ${typography.size.l}px;
    font-weight: ${typography.weight.regular};
    color: ${colors.default.secundario.base};
    text-decoration: underline;
`;

const Link = props => {
  return <a css={styles}>{props.children}</a>;
};

Link.propTypes = {
  children: PropTypes.string,
};

export {Link as default};
