import React from 'react';
import {PropTypes} from 'prop-types';
import SideMenuButton from './../SideMenuButton/SideMenuButton';

export default class SideMenu extends React.Component {
  state = {
    activeMenuItem: this.props.activeMenuItem,
  };

  changeActiveItem = () => {};

  render () {
    const props = this.props;

    return (
      <aside className="host-side-menu">
        <SideMenuButton uxpId="side.menu.button.1" icon="user">
          Gestión De Datos
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.2" icon="building">
          Estructura Organizacional
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.3" icon="id-badge">
          Permisos De Usuario
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.4" icon="cogs">
          Administración General
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.5" icon="briefcase">
          Gestión Operativa
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.6" icon="building">
          Estructura Organizacional
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.7" icon="id-card-o">
          Gestión De Licencias
        </SideMenuButton>
        <SideMenuButton uxpId="side.menu.button.8" icon="paint-brush">
          Apariencia De Inicio
        </SideMenuButton>
      </aside>
    );
  }
}

SideMenu.propTypes = {
  activeMenuItem: PropTypes.string,
};
