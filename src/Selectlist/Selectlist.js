import React from 'react';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import {PropTypes} from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import Input from '../Input/Input';

export default class Selectlist extends React.Component {
  state = {
    defaultValue: this.props.defaultValue,
    value: '',
    dropdownIsOpen: this.props.dropdownIsOpen,
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
    });
  };

  selectItem = e => {
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
        {props.label
          ? <Label>
              {props.label}
            </Label>
          : null}
        <div
          className={`temis-selectlist${(state.dropdownIsOpen ? ' temis-selectlist--focus' : ' temis-selectlist--blur') + (props.disabled ? ' temis-selectlist--disabled' : '')}`}
          onClick={
            state.dropdownIsOpen ? this.closeDropdown : this.openDropdown
          }
        >
          <Input
            label={null}
            className="temis-selectlist__input"
            type="text"
            placeholder="Seleccione una opción"
            ref={this.selectlistInput}
            value={state.value}
          />
          <Icon
            className="temis-selectlist__icono"
            icon="caret-down"
            color="texto-regular"
          />
        </div>
        <Dropdown isOpen={state.dropdownIsOpen}>
          {props.children
            ? props.children
            : <DropdownItem disabled>No existen registros...</DropdownItem>}
        </Dropdown>
      </React.Fragment>
    );
  }
}

Selectlist.propTypes = {
  /** Define el texto que irá en la etiqueta. 
   * Si lo dejas vacío, no se renderizará la etiqueta.  */
  label: PropTypes.string,
  /** Introduce componentes "SelectItem" para popular el dropdown de este componente. */
  children: PropTypes.node,
  /**
   * Indica el valor precargado por defecto.
   */
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  dropdownIsOpen: PropTypes.bool,
};

Selectlist.defaultProps = {
  label: 'Países:',
  dropdownIsOpen: false,
};
