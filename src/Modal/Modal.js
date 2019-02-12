import React, {Component} from 'react';
import Button from '../Button/Button.js';
import Link from '../Link/Link.js';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';

const stylesModalContainer = `
  display: flex;
  position: fixed;
  place-content: start start;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const stylesModalWindow = (width, height) => `
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: auto;
  min-width: 150px;
  max-width: 1200px;
  width: ${width === 0 ? 'auto' : width + 'px'};
  min-height: 235px;
  max-height: 600px;
  height: ${height === 0 ? 'auto' : height + 'px'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const stylesHeader = `
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px; 
  width: 100%;
  height: 50px;
  background-color: ${colors.default.primario.light};
`;

const stylesH1 = `
  font-family: ${typography.fontFamily};
  font-size: ${typography.size.xl + 'px'};
  font-weight: ${typography.weight.regular};
  color: ${colors.white};
`;

const stylesBody = `
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${colors.constantes.fondo.otros};
`;

const stylesFooter = `
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 80px;
  background-color: ${colors.constantes.fondo.general};
`;

class Modal extends Component {
  constructor (props) {
    super (props);
    this.state = {show: false};
  }

  render () {
    return (
      <div className="modal-container" css={stylesModalContainer}>
        <div
          className="modal-window"
          css={stylesModalWindow (this.props.width, this.props.height)}
        >
          <header css={stylesHeader}>
            <h1 css={stylesH1}>{this.props.title}</h1>
          </header>
          <div className="body" css={stylesBody}>
            {this.props.children}
          </div>
          <footer css={stylesFooter}>
            <Button type="primario">{this.props.primaryButtonLabel}</Button>
            <Button type="secundario">{this.props.secondaryButtonLabel}</Button>
            <Link>{this.props.linkLabel}</Link>
          </footer>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /**
   * Ancho del modal. 
   * Si se deja en cero, su ancho se calculará según su contenido.
   */
  width: PropTypes.number,
  /**
   * Altura del modal. 
   * Si se deja en cero, su altura se calculará según su contenido.
   * Si su contenido es mayor que su altura, se activará automáticamente el desplazamiento vertical.
   */
  height: PropTypes.number,
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
