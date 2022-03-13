import { darkModeTheme, lightModeTheme } from './styles/theme';
import { ColorModeOption } from './types';

/**
 * @description controles the color theme of the app
 * @param colorMode The selected color theme
 * @return The data of the selected color theme
 */
const onSelectColorTheme = (colorMode: ColorModeOption) => {
  switch (colorMode) {
    case 'light':
      return lightModeTheme;
    case 'dark':
      return darkModeTheme;
    default:
      return lightModeTheme;
  }
};

export default onSelectColorTheme;
