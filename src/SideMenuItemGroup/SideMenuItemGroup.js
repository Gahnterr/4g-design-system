import React from 'react';
import SideMenuItem from './../SideMenuItem/SideMenuItem';
import Icon from './../Icon/Icon.js';
import Collapse from 'react-css-collapse';
import {PropTypes} from 'prop-types';

export default class SideMenuItemGroup extends React.Component {
  state = {isExpanded: this.props.isExpanded};

  toggleMenuItem = () => {
    this.setState ({isExpanded: !this.state.isExpanded});
  };

  render () {
    const props = this.props;
    const state = this.state;

    return (
      <React.Fragment>
        <SideMenuItem
          {...props}
          onClick={this.toggleMenuItem}
          isActive={state.isExpanded}
        >
          <Icon
            className="host-side-menu__list__group__caret"
            icon="caret-right"
            rotate={state.isExpanded ? '90' : '0'}
            size={null}
            color={null}
            fixedWidth
          />
        </SideMenuItem>
        <Collapse
          className="host-side-menu__list__group"
          isOpen={state.isExpanded}
        >
          {props.children}
        </Collapse>
      </React.Fragment>
    );
  }
}

SideMenuItemGroup.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.string,
  indentationLevel: PropTypes.number,
  isExpanded: PropTypes.bool,
};
