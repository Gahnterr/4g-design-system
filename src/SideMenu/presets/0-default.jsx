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
        icon={null}
        text="Entidades"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.1.item.2"
        icon={null}
        text="Catálogos"
        indentationLevel={1}
      />
      <SideMenuItemGroup
        uxpId="side.menu.group.1.group.1"
        icon={null}
        text="Entidades"
        indentationLevel={1}
      >
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.1"
          icon={null}
          text="Gestión"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.2"
          icon={null}
          text="Documento"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.3"
          icon={null}
          text="Tipo de envío"
          indentationLevel={2}
        />
        <SideMenuItem
          uxpId="side.menu.group.1.group.item.4"
          icon={null}
          text="Audiencia"
          indentationLevel={2}
        />
      </SideMenuItemGroup>
      <SideMenuItem
        uxpId="side.menu.group.1.item.3"
        icon={null}
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
        icon={null}
        text="Unidad Organizacional"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.2.item.2"
        icon={null}
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
        icon={null}
        text="Roles"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.3.item.2"
        icon={null}
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
        icon={null}
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
        icon={null}
        text="Repositorios"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.2"
        icon={null}
        text="Áreas de trabajo"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.3"
        icon={null}
        text="Plantillas"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.4"
        icon={null}
        text="Menú"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.5"
        icon={null}
        text="Flujos de estados"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.group.5.item.6"
        icon={null}
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
        icon={null}
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
        icon={null}
        text="Pantalla de inicio"
        indentationLevel={1}
      />
      <SideMenuItem
        uxpId="side.menu.grouo.7.item.2"
        icon={null}
        text="Panel de información"
        indentationLevel={1}
      />
    </SideMenuItemGroup>
  </SideMenu>
);
