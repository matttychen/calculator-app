export type ColorModeThemeData = {
  primary: {
    main: string;
    light: string;
    medium: string;
    unselected: string;
    highlight: string;
  };
  secondary: {
    main: string;
  };
};

export type ColorModeOption = 'light' | 'dark';
