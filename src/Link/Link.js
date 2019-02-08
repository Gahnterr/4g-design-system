import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';

const Link = props => {
  return <a>{props.children}</a>;
};

Link.propTypes = {
  children: PropTypes.string,
};

export {Link as default};
