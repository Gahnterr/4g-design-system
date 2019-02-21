# Design System para 4G

Aquí se encuentra el design system para el proyecto 4G. Está codificado utilizando ReactJS, que es una librería de Javascript que permite crear interfaces de usuario, creada por Facebook. Para más información sobre ReactJs, visita https://reactjs.org/.

## Cómo ejecutar el ambiente de prueba

El ambiente de prueba permite revisar cómo se renderizan los componentes dentro de UXPin, lo cual es necesario si se quiere crear un nuevo componente e incorporarlo al Design System. 

### Requisitos
Para poder ejecutar el ambiente de prueba, se necesita instalar ciertas herramientas primero:

- WSL Bash con Ubuntu (medida necesaria temporal, por ahora UXPin Merge no funciona con Windows pero sí con un subsistema Linux https://docs.microsoft.com/es-mx/windows/wsl/install-win10)
- NodeJS (https://nodejs.org/en/)
- NPM (https://www.npmjs.com/get-npm)
- GitHub para Escritorio (sólo es necesario si deseas sincronizar el repositorio con la nube, de otra forma, sólo descarga como ZIP https://desktop.github.com/)
- Visual Studio Code (editor de código recomendado https://code.visualstudio.com/)
- Una cuenta en UXPin Merge (crea una nueva cuenta con free trial en https://app.merge.uxpin.cloud)

> Nota: Si usas WSL Bash con Ubuntu, tendrás que abrir Ubuntu (una vez instalado) e instalar por medio de la terminal NodeJS y NPM. De otra forma, no funcionará UXPin Merge, porque estás ejecutándolo desde el subsistema Linux en lugar de Windows. Sigue las instrucciones de instalación como si fuera Linux en las páginas de descarga.

### Instrucciones
1.  Instala WSL y descarga Ubuntu según las instrucciones en la página de Microsoft. Esta es una medida necesaria temporal, ya que UXPin Merge no funciona con Windows pero sí con Linux y macOS. Una vez se actualice UXPin Merge para que funcione con Windows, ya no será necesario hacer este paso.
2.  Instala Visual Studio Code y configura el "Default Shell" para "wsl". Para hacer esto:
    1.  Abre VSCode y presiona las teclas Ctrl + Shift + P. 
    2.  En el menú que aparece en la parte superior de la pantalla, escribe "Default Shell" y selecciona la opción apropiada.
    3.  Selecciona la opción "wsl". Esto hará que cuando abra una nueva terminal dentro de VSCode, se abrirá uan terminal de Ubuntu.
3.  Clona o descarga este repositorio a tu dispositivo. Puedes hacer esto con GitHub Desktop (https://desktop.github.com/), pero ocuparás hacer una cuenta nueva de GitHub. También puedes hacer clic en "Clone or download" > "Download as ZIP" para descargarlo como un archivo comprimido.
4.  Localiza la ubicación del folder del repositorio.
5.  En Visual Studio Code, abre el folder del repositorio. Para hacer esto, ve a "File" > "Open Folder" y selecciona la carpeta "4g-design-system".
6.  Antes de comenzar a utilizar la terminal para instalar las dependencias necesarias del repositorio, asegúrate que hayas instalado NPM y NodeJS dentro del subsistema de Ubuntu en una terminal WSL. Para hacer eso, abre Ubuntu (una vez lo hayas instalado, cuando lo abras por primera vez, 
7.  Abre una terminal dentro de Visual Studio Code y escribe `npm install` y espera a que termine de instalar todas las dependencias necesarias.
8.  Ahora, dirígete a https://app.merge.uxpin.cloud y crea una nueva cuenta (comienza un "Free trial"). Asegúrate que estés iniciado sesión en esa ruta, será necesario para poder entrar al editor de Merge en modo experimental.
9.  Una vez termine de instalarse las dependencias y te hayas asegurado de iniciar sesión, en la terminal, escribe `npm start` para comenzar a ejecutar el ambiente de prueba.
10.  Cuando temrine de ejecutarse exitosamente, verás un mensaje de bienvenida en la terminal y se abrirá una nueva pestaña en tu navegador, en donde se cargarán todos los componentes y podrás experimentar con ellos. Este es un ambiente de prueba separado de UXPin real.

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
