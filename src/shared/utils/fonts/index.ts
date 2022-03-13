import { createGlobalStyle } from 'styled-components';

import KarbonSemibold from './src/Karbon-Semibold.otf';
import KarbonMedium from './src/Karbon-Medium.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Karbon';
    src: url(${KarbonSemibold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Karbon';
    src: url(${KarbonMedium}) format('opentype');
    font-weight: 600;
  }
`;
