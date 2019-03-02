import React from 'react';
import ProcessButton from './../ProcessButton/ProcessButton';
import {PropTypes} from 'prop-types';
import Dropdown from './../Dropdown/Dropdown';
import DropdownItem from './../DropdownItem/DropdownItem';

export default class ProcessBar extends React.Component {
  render () {
    return (
      <div className="temis-barra-proceso">
        {this.props.children}
        <ProcessButton className="btn--proceso-overflow">
          <Icon icon="ellipsis-v" color={null} />
        </ProcessButton>
        <div className="temis-barra-proceso__overflow" />
      </div>
    );
  }
}

ProcessBar.propTypes = {
  children: PropTypes.node,
};
