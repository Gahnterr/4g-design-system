import React from 'react';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import {PropTypes} from 'prop-types';

export default class Selectlist extends React.Component {
  state = {
    selected: '',
    value: '',
    dropdownIsOpen: false,
    options: this.props.options,
  };

  selectlistInput = React.createRef ();

  handleInputFocus = () => {
    this.setState ({dropdownIsOpen: true});
  };

  handleInputBlur = e => {
    this.setState ({value: this.state.selected, dropdownIsOpen: false});
  };

  handleInputChange = e => {
    this.setState ({value: e.target.value});
  };

  handleIconClick = () => {
    if (this.state.dropdownIsOpen) {
      this.setState ({value: this.state.selected, dropdownIsOpen: false});
    } else {
      this.setState ({dropdownIsOpen: true});
    }
  };

  handleItemSelect = e => {
    this.setState ({
      selected: e.target.innerText,
      value: e.target.innerText,
      dropdownIsOpen: false,
    });
  };

  render () {
    const state = this.state;
    const props = this.props;

    return (
      <React.Fragment>
        {props.label ? <Label>{props.label}</Label> : null}
        <div
          className={`selectlist${state.dropdownIsOpen ? ' selectlist--focus' : ' selectlist--blur'}`}
        >
          <input
            className="selectlist__input"
            type="text"
            placeholder="Seleccione una opción"
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            ref={this.selectlistInput}
            value={state.value}
          />
          <Icon
            className="selectlist__icono"
            icon="caret-down"
            color="texto-regular"
            size={null}
            onClick={this.handleIconClick}
          />
          {state.dropdownIsOpen
            ? <ul
                className="dropdown default-scrollbar"
                onMouseUp={this.handleItemSelect}
              >
                {state.options
                  ? state.options.map (option => (
                      <li className="dropdown__item">
                        {option}
                      </li>
                    ))
                  : <li className="dropdown__item" disabled>
                      No existen registros...
                    </li>}
              </ul>
            : null}
        </div>
      </React.Fragment>
    );
  }
}

Selectlist.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selected: PropTypes.number,
};
