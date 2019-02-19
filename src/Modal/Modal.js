import React, {Component} from 'react';
import Button from '../Button/Button.js';
import Link from '../Link/Link.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import colors from '../styles/colors.json';
import typography from '../styles/typography.json';
import '../styles/styles.css';

const stylesModalContainer = `
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  animation: fade 150ms linear;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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

  animation: openModal 350ms cubic-bezier(0.335, 1.650, 0.280, 1.010);

  @keyframes openModal {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
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
  color: ${colors.constantes.texto.regular};
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
  button {
    margin-left: 10px;
  }
  a {
    margin-right: auto; 
  }
`;

class Modal extends Component {
  state = {show: this.props.show};

  closeModal = () => {
    this.setState ({show: false});
  };

  render () {
    const props = this.props;
    const state = this.state;
    return state.show
      ? <div className="modal-container" css={stylesModalContainer}>
          <div
            className="modal-window"
            css={stylesModalWindow (props.width, props.height)}
          >
            <header css={stylesHeader}>
              <h1 css={stylesH1}>{props.title}</h1>
              <Icon size="lg" />
            </header>
            <div className="body" css={stylesBody}>
              {props.children}
            </div>
            <footer css={stylesFooter}>
              <Button type="primario" onClick={props.primaryButtonAction}>
                {props.primaryButtonLabel}
              </Button>
              <Button type="secundario" onClick={props.secondaryButtonAction}>
                {props.secondaryButtonLabel}
              </Button>
              <Link size="regular" onClick={this.closeModal}>
                {props.linkLabel}
              </Link>
            </footer>
          </div>
        </div>
      : null;
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
  /**
   * Define las acciones que realizará el botón primario al ser presionado.
   */
  primaryButtonAction: PropTypes.func,
  /**
   * Texto a mostrar en el botón secundario del modal.
   */
  secondaryButtonLabel: PropTypes.string,
  /**
   * Define las acciones que realizará el botón secundario al ser presionado.
   */
  secondaryButtonAction: PropTypes.func,
  /**
   * Texto a mostrar en el botón destructivo del modal.
   */
  linkLabel: PropTypes.string,
  /**
   * Aquí se indica si el modal se mostrará o se ocultará.
   */
  show: PropTypes.bool,
};

export default Modal;
