import React from 'react';
import SideMenu from '../SideMenu';
import SideMenuItem from '../../SideMenuItem/SideMenuItem';

export default (
  <SideMenu uxpId="side.menu.1">
    <SideMenuItem
      uxpId="side.menu.button.1"
      icon="user"
      text="Gestión De Datos"
    />
    <SideMenuItem
      uxpId="side.menu.button.2"
      icon="building"
      text="Estructura Organizacional"
    />
    <SideMenuItem
      uxpId="side.menu.button.3"
      icon="id-badge"
      text="Permisos De Usuario"
    />
  </SideMenu>
);
