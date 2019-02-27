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
    isSearching: false,
    searchResults: [],
  };

  selectlistInput = React.createRef ();

  openDropdown = () => {
    this.setState ({dropdownIsOpen: true});
    this.selectlistInput.current.addEventListener (
      'focusout',
      this.closeDropdown,
      false
    );
  };

  closeDropdown = () => {
    this.setState ({
      value: this.state.selected,
      dropdownIsOpen: false,
      isSearching: false,
    });
    this.selectlistInput.current.removeEventListener ();
  };

  buildDropdown = options => {
    return options.map (option => (
      <li className="dropdown__item" onClick={this.selectItem}>{option}</li>
    ));
  };

  selectItem = e => {
    e.preventPropagation ();
    this.setState ({
      selected: e.target.innerText,
      value: e.target.innerText,
      dropdownIsOpen: false,
    });
  };

  searchItem = e => {
    const searchTerm = RegExp (e.target.value);
    const searchResults = this.state.options.map (option => {
      if (searchTerm.test (option)) {
        return option;
      }
    });
    this.setState ({
      value: e.target.value,
      // isSearching: true,
      searchResults: searchResults,
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
            ref={this.selectlistInput}
            value={state.value}
            onFocus={this.openDropdown}
            /* onBlur={this.closeDropdown} */
            onChange={this.searchItem}
          />
          <Icon
            className="selectlist__icono"
            icon="caret-down"
            color="texto-regular"
            onClick={() =>
              state.dropdownIsOpen
                ? this.selectlistInput.current.blur ()
                : this.selectlistInput.current.focus ()}
            size={null}
          />
          {state.dropdownIsOpen
            ? <ul className="dropdown">
                {this.buildDropdown (state.options)}
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
