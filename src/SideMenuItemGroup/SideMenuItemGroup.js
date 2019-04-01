import React from 'react';
import SideMenuItem from './../SideMenuItem/SideMenuItem';
import Icon from './../Icon/Icon.js';
import Collapse from 'react-css-collapse';
import {PropTypes} from 'prop-types';

export default class SideMenuItemGroup extends React.Component {
  render () {
    const props = this.props;

    return (
      <React.Fragment>
        <SideMenuItem {...props} onClick={props.onClick}>
          <Icon
            className="host-side-menu__list__group__caret"
            icon="caret-right"
            rotate={props.isExpanded ? '90' : 'normal'}
            size={null}
            color={null}
            fixedWidth
            onClick={props.onClick}
          />
        </SideMenuItem>
        <Collapse
          className="host-side-menu__list__group"
          isOpen={props.isExpanded}
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
  onClick: PropTypes.func,
  value: PropTypes.any,
};
