import React from 'react';
import SideMenuItem from './../SideMenuItem/SideMenuItem';
import Icon from './../Icon/Icon.js';
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
          icon={props.icon}
          text={props.text}
          onClick={this.toggleMenuItem}
          isActive={state.isActive}
        >
          <Icon
            className="host-side-menu__list__group__caret"
            icon="caret-right"
            size={null}
            color={null}
            fixedWidth
          />
        </SideMenuItem>
        <div
          className={`host-side-menu__list__group${state.isExpanded ? ' host-side-menu__list__group--expanded' : ' host-side-menu__list__group--collapsed'}`}
        >
          {props.children}
        </div>
      </React.Fragment>
    );
  }
}

SideMenuItemGroup.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.string,
  isExpanded: PropTypes.bool,
};
