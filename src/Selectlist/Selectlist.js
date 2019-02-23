import React from 'react';
import Icon from '../Icon/Icon';
import {PropTypes} from 'prop-types';

export default class Selectlist extends React.Component {
  state = {
    value: '',
    focus: false,
    options: this.props.options,
  };

  selectlistInput = React.createRef ();

  handleFocus = () => {
    this.setState ({focus: true});
  };

  handleBlur = () => {
    this.setState ({focus: false});
  };

  handleClick = () => {
    this.selectlistInput.current.focus ();
  };

  handleItemSelect = e => {
    this.setState ({value: e.target.value});
  };

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
            ref={this.selectlistInput}
            value={state.value}
          />
          <Icon
            className="selectlist__icono"
            icon="caret-down"
            color="texto-regular"
            size={null}
            onClick={this.handleClick}
          />
        </div>
        {state.focus
          ? <ul className="dropdown default-scrollbar">
              {state.options.map (option => (
                <li className="dropdown__item" onClick={this.handleItemSelect}>
                  {option}
                </li>
              ))}
            </ul>
          : null}
      </React.Fragment>
    );
  }
}

Selectlist.propTypes = {
  options: PropTypes.array,
};
