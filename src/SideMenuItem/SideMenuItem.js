import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from '../Icon/Icon.js';

export default class SideMenuItem extends React.Component {
  getLeftPadding = () => {
    return `padding-left: ${10 + 22 * this.props.indentationLevel}px;`;
  };

  render () {
    const props = this.props;

    return (
      <li
        className={
          'host-side-menu__list__item' +
            (props.isActive
              ? ' host-side-menu__list__item--active'
              : ' host-side-menu__list__item--inactive')
        }
        onClick={props.onClick}
        style={props.style}
        css={this.getLeftPadding}
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
      </li>
    );
  }
}

SideMenuItem.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  indentationLevel: PropTypes.number,
  style: PropTypes.object,
};

SideMenuItem.defaultProps = {
  isActive: false,
  icon: 'arrow-left',
  indentationLevel: 0,
};
