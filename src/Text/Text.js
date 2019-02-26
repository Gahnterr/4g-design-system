import React from 'react';
import {PropTypes} from 'prop-types';
import typography from '../styles/typography.json';
import colors from '../styles/colors.json';

const Text = props => {
  const styles = `
    font-family: ${typography.fontFamily};
    color: ${props.color};       
    font-size: ${typography.size.m}px;
    font-weight: ${typography.weight.regular};
    width: 100%;
    white-space: ${props.whiteSpace};

    i {
        font-size: inherit;
        font-weight: ${typography.weight.regular};
    }
  `;

  return <p className={props.className} css={styles}>{props.children}</p>;
};

Text.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf (['left', 'center', 'right', 'justify']),
  color: PropTypes.string,
  whiteSpace: PropTypes.oneOf ([
    'normal',
    'nowrap',
    'pre',
    'pre-line',
    'pre-wrap',
    'initial',
    'inherit',
  ]),
  className: PropTypes.string,
};

Text.defaultProps = {
  children: 'Aquí va tu texto...',
  align: 'left',
  color: colors.constantes.texto.regular,
  whiteSpace: 'initial',
};

export {Text as default};
