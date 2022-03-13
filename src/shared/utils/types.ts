export type ColorModeThemeData = {
  primary: {
    main: string;
    light: string;
    dark: string;
    highlight: string;
  };
  secondary: {
    main: string;
  };
};

export type ColorModeOption = 'light' | 'dark';
