import React from 'react';
import {PropTypes} from 'prop-types';

const TableRow = props => {
  return (
    <tr
      className={'temis-table__tbody__tr ' + props.className}
      style={props.style}
    >
      {props.children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TableRow;
