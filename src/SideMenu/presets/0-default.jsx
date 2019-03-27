import React from 'react';
import SideMenu from '../SideMenu';
import SideMenuItem from '../../SideMenuItem/SideMenuItem';
import SideMenuItemGroup from './../../SideMenuItemGroup/SideMenuItemGroup';

export default (
  <SideMenu uxpId="side.menu.1">
    <SideMenuItemGroup
      uxpId="side.menu.group.1"
      icon="user"
      text="Gestión De Datos"
    >
      <SideMenuItem
        uxpId="side.menu.group.1.item.1"
        icon={false}
        text="Entidades"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.1.item.2"
        icon={false}
        text="Catálogos"
        indentationLevel={1}
      />
      <SideMenuItemGroup
        uxpId="side.menu.group.1.group.1"
        icon={false}
        text="Entidades"
        indentationLevel={1}
      >
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.1"
          icon={false}
          text="Gestión"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.2"
          icon={false}
          text="Documento"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.3"
          icon={false}
          text="Tipo de envío"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.4"
          icon={false}
          text="Audiencia"
          indentationLevel={2}
        />
      </SideMenuItemGroup>
      <SideMenuItem
        uxpId="side.menu.group.1.item.3"
        icon={false}
        text="Formularios"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.2"
      icon="building"
      text="Estructura Organizacional"
    >
      <SideMenuItem
        uxpId="side.menu.group.2.item.1"
        icon={false}
        text="Unidad Organizacional"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.2.item.2"
        icon={false}
        text="Organización Geográfica"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.3"
      icon="id-badge"
      text="Permisos De Usuario"
    >
      <SideMenuItem
        uxpId="side.menu.group.3.item.1"
        icon={false}
        text="Roles"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.3.item.2"
        icon={false}
        text="Perfiles de usuario"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.4"
      icon="cogs"
      text="Administración General"
    >
      <SideMenuItem
        uxpId="side.menu.group.4.item.1"
        icon={false}
        text="Mtto. de catálogos"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.5"
      icon="briefcase"
      text="Gestión Operativa"
    >
      <SideMenuItem
        uxpId="side.menu.group.5.item.1"
        icon={false}
        text="Repositorios"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.2"
        icon={false}
        text="Áreas de trabajo"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.3"
        icon={false}
        text="Plantillas"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.4"
        icon={false}
        text="Menú"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.5"
        icon={false}
        text="Flujos de estados"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.6"
        icon={false}
        text="Reportes"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.6"
      icon="id-card-o"
      text="Gestión De Licencias"
    >
      <SideMenuItem
        uxpId="side.menu.grouo.6.item.1"
        icon={false}
        text="Licencias"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
    <SideMenuItemGroup
      uxpId="side.menu.group.7"
      icon="paint-brush"
      text="Apariencia De Inicio"
    >
      <SideMenuItem
        uxpId="side.menu.grouo.7.item.1"
        icon={false}
        text="Pantalla de inicio"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.grouo.7.item.2"
        icon={false}
        text="Panel de información"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
  </SideMenu>
);
