import React, {cloneElement, Children} from 'react';
import {PropTypes} from 'prop-types';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

export default class SideMenu extends React.Component {
  state = {activeMenuItem: this.props.activeMenuItem};

  toggleActiveMenuItem = index => {
    this.setState ({activeMenuItem: index});
  };

  render () {
    const {children} = this.props;
    const {activeMenuItem} = this.state;

    const getChildren = Children.map (children, (child, index) => {
      if (index === activeMenuItem) {
        return cloneElement (child, {
          isExpanded: true,
          key: index.toString (),
        });
      } else {
        return cloneElement (child, {
          key: index.toString (),
        });
      }
    });

    return (
      <aside className="host-side-menu">
        <ul className="host-side-menu__list">
          {getChildren}
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
