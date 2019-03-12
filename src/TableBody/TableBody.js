import React from 'react';
import {PropTypes} from 'prop-types';

const TableBody = props => {
  return (
    <tbody
      className={'temis-table__tbody ' + props.className}
      style={props.style}
    >
      {props.children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TableBody;
