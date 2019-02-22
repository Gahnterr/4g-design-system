import React from 'react';
import Icon from '../Icon/Icon';
import {PropTypes} from 'prop-types';

export default class Selectlist extends React.Component {
  state = {
    value: '',
    focus: false,
  };

  handleFocus = () => {};

  render () {
    return (
      <div className="selectlist">
        <input
          className="selectlist__input"
          type="text"
          placeholder="Seleccione una opción"
        />
        <Icon
          className="selectlist__icono"
          icon="caret-down"
          color="texto-regular"
        />
      </div>
    );
  }
}

Selectlist.propTypes = {
  options: PropTypes.string,
};
