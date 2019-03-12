import React from 'react';
import {PropTypes} from 'prop-types';

class Table extends React.Component {
  state = {data: this.props.data};

  render () {
    const props = this.props;

    return (
      <table className="temis-table">
        {props.children}
      </table>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
};

export default Table;
