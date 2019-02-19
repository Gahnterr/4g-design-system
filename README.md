# Design System para 4G

Aquí se encuentra el design system para el proyecto 4G. Está codificado utilizando ReactJS, que es una librería de Javascript que permite crear interfaces de usuario, creada por Facebook. Para más información sobre ReactJs, visita https://reactjs.org/.

## Cómo ejecutar el ambiente de prueba

El ambiente de prueba permite revisar cómo se renderizan los componentes dentro de UXPin, lo cual es necesario si se quiere crear un nuevo componente e incorporarlo al Design System. 

### Requisitos
Para poder ejecutar el ambiente de prueba, se necesita instalar ciertas herramientas primero:

- NodeJS
- NPM
- GitHub para Escritorio
-Visual Studio Code (editor de código recomendado)

### Instrucciones
1.  Clona o descarga este repositorio a tu dispositivo.
2.  Localiza la ubicación del folder del repositorio.
3.  En Visual Studio Code, abre el folder del repositorio.
4.  Abre una terminal dentro de Visual Studio Code y escribe `npm install` y espera a que termine de instalar todas las dependencias necesarias.
5.  Ahora, dirígete a https://app.merge.uxpin.cloud y crea una nueva cuenta (comienza un "Free trial"). Asegúrate que estés iniciado sesión en esa ruta, será necesario para poder entrar al editor de Merge en modo experimental.
6.  Una vez termine de instalarse las dependencias y te hayas asegurado de iniciar sesión, en la terminal, escribe `npm start` para comenzar a ejecutar el ambiente de prueba.
7.  Cuando temrine de ejecutarse exitosamente, verás un mensaje de bienvenida en la terminal y se abrirá una nueva pestaña en tu navegador, en donde se cargarán todos los componentes y podrás experimentar con ellos. Este es un ambiente de prueba separado de UXPin real.

## Cómo modificar componentes existentes

Para poder modificar componentes, tendrás que dirigirte a la siguiente ruta: `4g-design-system/src/` en VS Code y abrir el archivo Javascript (terminación .js). Es importante recordar que está escrito todo en JSX utilizando ReactJS.

El proyecto acepta ES6 y también existe un archivo de estilos en `4g-design-system/src/styles/styles.css` que puedes utilizar para estilizar componentes. Sólo recuerda revisar que esté importado la hoja de estilos en el componente que quieras estilizar.

## Cómo agregar nuevos componentes

Para agregar nuevos componentes, es necesario tomar en cuenta la estructura que debe llevar:

### Estructura de componentes

    4g-design-system
    └─ src
       └─ NombreDelComponente
          ├─ presets
          │  └─ 0-default.jsx
          └─ NombreDelComponente.js
          
* Reemplaza "NombreDelComponente" con el nombre que deseas darle a tu componente. 
* Puedes importar otros componente dentro de tu nuevo componente por medio de:
````javascript 
import Componente from 'directorio/del/Componente.js';
```` 
* Para importar hojas de estilo, no es necesario darle un nombre a menos que desees llamar la hoja de estilo en una instancia específica.

En este ejemplo, se importa la hoja de estilos en todo tu componente:
````JSX
import React from 'react';
import 'directorio/de/la/hoja/de/estilos.css';

const Componente = props => {
    return <h1>{props.children}</h1>;
}

export default Componente;
````

En el siguiente ejemplo, se importa la hoja de estilos como un objeto y se manda a llamar dentro del atributo `css` de un elemento html. De esta manera, sólo se aplica el CSS a ese elemento y los demás no son afectados.

`````JSX
import React from 'react';
import css from 'directorio/de/la/hoja/de/estilos.css';

const Componente = props => {
    return (
    <div>
        <h1>{props.children}</h1>
        <p css={css}>{props.text}</div>
    </div>
    );
}

export default Componente;
````
