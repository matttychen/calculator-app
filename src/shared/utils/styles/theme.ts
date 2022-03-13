import { ColorModeThemeData } from '../types';
import {
  black,
  blueDark,
  blueLight,
  blueMedium,
  grayDark,
  grayLight,
  grayMedium,
  orange,
  white,
} from './colors';

export const lightModeTheme: ColorModeThemeData = {
  primary: {
    main: white,
    light: grayLight,
    medium: grayMedium,
    unselected: grayMedium,
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
    medium: blueMedium,
    unselected: grayDark,
    highlight: orange,
  },
  secondary: {
    main: white,
  },
};
