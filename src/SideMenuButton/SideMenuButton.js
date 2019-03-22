import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from './../Icon/Icon.js';

export default class SideMenuButton extends React.Component {
  state = {isActive: this.props.isActive};

  handleClick = () => {
    this.props.onClick;
    this.setState ({isActive: !this.state.isActive});
  };

  render () {
    const props = this.props;

    return (
      <div
        className={
          'host-side-menu__button' +
            (props.isActive ? ' host-side-menu__button--active' : '')
        }
        onClick={this.handleClick}
      >
        <Icon
          icon={props.icon}
          color={null}
          fixedWidth
          style={{position: 'absolute'}}
        />
        <div className="host-side-menu__button__title">{props.children}</div>
      </div>
    );
  }
}

SideMenuButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
};

SideMenuButton.defaultProps = {
  isActive: false,
  icon: 'arrow-left',
};
