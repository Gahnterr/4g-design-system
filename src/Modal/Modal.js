import React, { Component } from "react";
import PropTypes from "prop-types";

const stylesModalContainer = `
    display: flex;
    width: auto;
    height: auto;
    flex-grow: grow;
    background-color: rgba(0, 0, 0, 0.5);
`;

export default class Modal extends Component {
  render() {
    return (
      <div className="modal-container" css={stylesModalContainer}>
        <div className="modal-window">{this.props.title}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
