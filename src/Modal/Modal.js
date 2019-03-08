import React from 'react';
import {PropTypes} from 'prop-types';

export default class Modal extends React.Component {
  state = {show: true};

  render () {
    const props = this.props;

    return <div className="temis-modal">{props.children}</div>;
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};
