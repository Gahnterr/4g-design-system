import React from 'react';
import {PropTypes} from 'prop-types';

const TableTH = props => {
  return (
    <th
      className={'temis-table__thead__tr__th ' + props.className}
      css={`width: ${props.width};`}
      style={props.style}
    >
      {props.children}
    </th>
  );
};

TableTH.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  className: PropTypes.string,
};

export default TableTH;
