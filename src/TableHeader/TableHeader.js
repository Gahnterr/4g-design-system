import React from 'react';
import {PropTypes} from 'prop-types';

class TableHeader extends React.Component {
  render () {
    const props = this.props;

    return (
      <thead className="temis-table__thead">
        <tr className="temis-table__thead__tr">
          {props.children}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  children: PropTypes.node,
};

export default TableHeader;
