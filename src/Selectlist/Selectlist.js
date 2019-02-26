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

  toggleDropdown = e => {
    if (e.target.classList.value.includes ('dropdown__item')) {
      this.selectItem (e.target.innerText);
    } else {
      this.state.dropdownIsOpen
        ? this.closeDropdown (this.state.selected)
        : this.openDropdown ();
    }
  };

  openDropdown = () => {
    this.setState ({dropdownIsOpen: true});
    this.selectlistInput.current.focus ();
  };

  closeDropdown = selected => {
    this.setState ({value: selected, dropdownIsOpen: false});
    this.selectlistInput.current.blur ();
  };

  searchItem = e => {
    this.setState ({value: e.target.value});
  };

  selectItem = targetInnerText => {
    this.setState ({
      selected: targetInnerText,
    });
    this.closeDropdown (targetInnerText);
  };

  render () {
    const state = this.state;
    const props = this.props;

    return (
      <React.Fragment>
        {props.label ? <Label>{props.label}</Label> : null}
        <div
          className={`selectlist${state.dropdownIsOpen ? ' selectlist--focus' : ' selectlist--blur'}`}
          onClick={this.toggleDropdown}
        >
          <input
            className="selectlist__input"
            type="text"
            placeholder="Seleccione una opción"
            ref={this.selectlistInput}
            value={state.value}
            onChange={this.searchItem}
          />
          <Icon
            className="selectlist__icono"
            icon="caret-down"
            color="texto-regular"
            size={null}
          />
          {state.dropdownIsOpen
            ? <ul className="dropdown default-scrollbar">
                {state.options
                  ? state.options.map (option => (
                      <li className="dropdown__item" key={option.toString ()}>
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
