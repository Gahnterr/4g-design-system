import React from 'react';
import Label from '../Label/Label';
import {PropTypes} from 'prop-types';

const Selectlist = props => {
  const {disabled, label, options} = props; 
  
  const renderOptions = return options.map((option, index) => (
    <option className="temis-selectlist__option">{option}</option>
  ));
  
  return (
      <React.Fragment>
        {label
          ? <Label>
              {label}
            </Label>
          : null}
        <select
          className="temis-selectlist"
        >
    {renderOptions}
        </select>
      </React.Fragment>
    );
}

Selectlist.propTypes = {
  /** Define el texto que irá en la etiqueta. 
   * Si lo dejas vacío, no se renderizará la etiqueta.  */
  label: PropTypes.string,
  /** Introduce componentes "SelectItem" para popular el dropdown de este componente. */
  options: PropTypes.array,
  /**
   * Indica el valor precargado por defecto.
   */
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};

Selectlist.defaultProps = {
  label: 'Países:',
};
