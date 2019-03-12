import React from 'react';
import {PropTypes} from 'prop-types';

const TableTD = props => {
  return (
    <td
      className={'temis-table__tbody__tr__td ' + props.className}
      style={props.style}
    >
      {props.children}
    </td>
  );
};

TableTD.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TableTD;
