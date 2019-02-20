import Modal from '../Modal';

export default (
  <Modal
    uxpId="1"
    title="Título del modal"
    primaryButtonLabel="Aceptar"
    secondaryButtonLabel="Guardar y crear otro"
    linkLabel="Regresar"
    show={true}
  >
    Cuerpo del modal. Puedes arrastrar otros componentes aquí dentro, o bien sólamente agregar texto dentro del prop children.
  </Modal>
);
