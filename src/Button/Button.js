import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button type="button">{props.children}</button>;

Button.PropTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: 'Botón primario',
};

export {Button as default};
