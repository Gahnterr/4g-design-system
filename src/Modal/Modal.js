import React, {Component} from 'react';
import Button from '../Button/Button.js';
import {PropTypes} from 'prop-types';
import colors from '../styles/colors.json';

const stylesModalContainer = `
    display: flex;
    position: fixed;
    place-content: start start;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const stylesModalWindow = `
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    min-width: 150px;
    max-width: 1200px;
    min-height: 235px;
    max-height: 600px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const stylesHeader = `
    width: 100%;
    height: 50px;
    background-color: ${colors.default.primario.light};
`;

const stylesBody = `
    background-color: ${colors.constantes.fondo.otros};
`;

class Modal extends Component {
  constructor (props) {
    super (props);
    this.state = {show: false};
  }

  render () {
    return (
      <div className="modal-container" css={stylesModalContainer}>
        <div className="modal-window" css={stylesModalWindow}>
          <header css={stylesHeader}>
            <h1>{this.props.title}</h1>
          </header>
          <div className="body" css={stylesBody}>
            {this.props.children}
          </div>
          <footer>
            <Button type="primario">{this.props.primaryButtonLabel}</Button>
          </footer>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /**
     * Título que aparecerá en el encabezado del modal.
     */
  title: PropTypes.string,
  /**
     * Contenido dentro del cuerpo del modal.
     * Arrastra otros componentes dentro del modal para agregarlos como children.
     */
  children: PropTypes.node,
  /**
   * Texto a mostrar en el botón primario del modal.
   */
  primaryButtonLabel: PropTypes.string,
};

export default Modal;
