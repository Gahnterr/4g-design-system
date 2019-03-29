import React, {cloneElement, Children} from 'react';
import {PropTypes} from 'prop-types';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

export default class SideMenu extends React.Component {
  state = {activeMenuItem: 0};

  toggleActiveMenuItem = e => {
    this.setState ({activeMenuItem: e.target.value});
  };

  render () {
    const children = Children.map (this.props.children, child => {
      return cloneElement (child, {
        isActive: true,
      });
    });

    return (
      <aside className="host-side-menu">
        <ul className="host-side-menu__list">
          {children}
        </ul>
        <footer className="host-side-menu__footer">
          <SideMenuItem icon="arrow-left" text="Lista de Modelos" />
        </footer>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  children: PropTypes.node,
  activeMenuItem: PropTypes.number,
};
