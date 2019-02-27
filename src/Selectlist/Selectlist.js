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

  componentDidMount = () => {
    document.addEventListener ('click', this.handleClickOutside);
  };

  componentWillUnmount = () => {
    document.removeEventListener ('click', this.handleClickOutside);
  };

  handleClickOutside = e => {
    if (e.target.nodeName === 'LI') {
      this.selectItem (e);
    } else if (e.target.nodeName === 'I' || e.target.nodeName === 'INPUT') {
      null;
    } else {
      this.closeDropdown ();
    }
  };

  openDropdown = () => {
    this.setState ({dropdownIsOpen: true});
    this.selectlistInput.current.focus ();
  };

  closeDropdown = () => {
    this.setState ({
      value: this.state.selected,
      dropdownIsOpen: false,
      isSearching: false,
    });
  };

  buildDropdown = options => {
    return options.map ((option, index) => (
      <li
        className="dropdown__item"
        onClickCapture={this.selectItem}
        key={index}
      >
        {option}
      </li>
    ));
  };

  selectItem = e => {
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
          onClick={
            state.dropdownIsOpen ? this.closeDropdown : this.openDropdown
          }
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
