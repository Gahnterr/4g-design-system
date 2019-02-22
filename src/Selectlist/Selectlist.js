import React from 'react';
import Icon from '../Icon/Icon';
import {PropTypes} from 'prop-types';

export default class Selectlist extends React.Component {
  state = {
    selected: '',
    focus: false,
    options: this.props.options,
  };

  handleFocus = () => {
    this.setState ({focus: true});
  };

  handleBlur = () => {
    this.setState ({focus: false});
  };

  handleClick = () => {};

  render () {
    const state = this.state;

    return (
      <React.Fragment>
        <div
          className={`selectlist${state.focus ? ' selectlist--focus' : ' selectlist--blur'}`}
        >
          <input
            className="selectlist__input"
            type="text"
            placeholder="Seleccione una opción"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <Icon
            className="selectlist__icono"
            icon="caret-down"
            color="texto-regular"
            onClick={state.focus ? this.handleBlur : this.handleFocus}
          />
        </div>
        {state.focus
          ? <div className="dropdown">
              <ul className="dropdown__list">
                <li
                  className="dropdown__list__item"
                  id="0"
                  onClick={this.handleClick}
                >
                  Test
                </li>
                <li
                  className="dropdown__list__item"
                  id="1"
                  onClick={this.handleClick}
                >
                  Segunda opción
                </li>
                <li
                  className="dropdown__list__item"
                  id="2"
                  onClick={this.handleClick}
                >
                  Otra opción
                </li>
                <li
                  className="dropdown__list__item"
                  id="3"
                  onClick={this.handleClick}
                >
                  México
                </li>
                <li
                  className="dropdown__list__item"
                  id="4"
                  onClick={this.handleClick}
                >
                  No México
                </li>
              </ul>
            </div>
          : null}
      </React.Fragment>
    );
  }
}

Selectlist.propTypes = {
  options: PropTypes.array,
};
