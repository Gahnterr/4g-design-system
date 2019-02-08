import * as React from 'react';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';

const Button = props => {
  return (
    <button
      type="button"
      style={{
        display: 'flex',
        minWidth: '150px',
        width: 'auto',
        maxWidth: '250px',
        height: '40px',
        justifyContent: 'center',
        borderRadius: '5px',
        border: 'none',
        fontSize: '14px',
        fontWeight: '500',
        color: '#fff',
        padding: '0 10px',
        backgroundColor: colors.default.primario.base,
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.4)',
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.PropTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf[('primary', 'secondary')],
};

export {Button as default};
