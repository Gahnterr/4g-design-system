import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from '../Icon/Icon.js';

export default class SideMenuItem extends React.Component {
  state = {isActive: this.props.isActive};

  render () {
    const props = this.props;

    return (
      <div
        className={
          'host-side-menu__list__item' +
            (props.isActive ? ' host-side-menu__list__item--active' : '')
        }
        onClick={props.onClick}
        style={props.style}
      >
        <Icon
          className="host-side-menu__list__item__icon"
          icon={props.icon}
          color={null}
          fixedWidth
        />
        <div className="host-side-menu__list__item__text">
          {props.text}
        </div>
        {props.children}
      </div>
    );
  }
}

SideMenuItem.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  style: PropTypes.object,
};

SideMenuItem.defaultProps = {
  isActive: false,
  icon: 'arrow-left',
};
