import { ColorModeThemeData } from '../types';
import {
  black,
  blueDark,
  blueLight,
  blueMedium,
  grayLight,
  grayMedium,
  orange,
  white,
} from './colors';

export const lightModeTheme: ColorModeThemeData = {
  primary: {
    main: white,
    light: grayLight,
    dark: grayMedium,
    highlight: orange,
  },
  secondary: {
    main: black,
  },
};

export const darkModeTheme: ColorModeThemeData = {
  primary: {
    main: blueDark,
    light: blueLight,
    dark: blueMedium,
    highlight: orange,
  },
  secondary: {
    main: white,
  },
};
