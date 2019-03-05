import React from 'react';
import {PropTypes} from 'prop-types';

const CSSGridContainer = props => {
  const styles = `
    display: ${props.display};
    grid-template-columns: ${props.gridTemplateColumns};
    grid-template-rows: ${props.gridTemplateRows};
    grid-template-areas: ${props.gridTemplateAreas};
    grid-template: ${props.gridTemplate};
    grid-column-gap: ${props.gridColumGap}px;
    grid-row-gap: ${props.gridRowGap}px;
    justify-items: ${props.justifyItems};
    width: 100%;
    height: 100%;
  `;

  return <div css={styles}>{props.children}</div>;
};

CSSGridContainer.propTypes = {
  children: PropTypes.node,
  display: PropTypes.oneOf (['grid', 'inline-grid']),
  /**
   * Aquí se definen la cantidad de columnas y las anchuras de las mismas.
   * 
   * Separa cada anchura por un espacio para definir más columnas.
   * Introduce la anchura en pixeles para definir una anchura absoluta.
   * Introduce la anchura en fr para indicar fracciones de la anchura total del contenedor.
   * También puedes utilizar porcentajes o "auto". Auto hace que el ancho de la columna sea el restante.
   * Es decir, crece tanto pueda, respetando el ancho de las demás columnas.
   */
  gridTemplateColumns: PropTypes.string,
  /**
   * Aquí se definen la cantidad de filas y los altos de las mismas.
   * 
   * Separa cada altura por un espacio para definir más filas.
   * Introduce la altura en pixeles para definir una altura absoluta.
   * Introduce la altura en fr para indicar fracciones de la altura total del contenedor.
   * También puedes utilizar porcentajes o "auto". Auto hace que el alto de la fila sea el restante.
   * Es decir, crece tanto pueda, respetando el alto de las demás filas.
   */
  gridTemplateRows: PropTypes.string,
  gridTemplateAreas: PropTypes.string,
  gridTemplate: PropTypes.string,
  gridColumnGap: PropTypes.number,
  gridRowGap: PropTypes.number,
  justifyItems: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
  alignItems: PropTypes.oneOf (['start', 'end', 'center', 'stretch']),
  justifyContent: PropTypes.oneOf ([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  alignContent: PropTypes.oneOf ([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
};

CSSGridContainer.defaultProps = {
  display: 'grid',
  gridTemplateColumns: '40px 50px auto 50px 40px',
  gridTemplateRows: '25% 100px auto',
  justifyItems: 'start',
  alignItems: 'start',
};

export default CSSGridContainer;
