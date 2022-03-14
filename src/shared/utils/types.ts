export type Operator = '+' | '-' | '*' | '/' | '';
export type SpecialOperator = '+/-' | '%';

export type CalculatorState =
  | 'accepting-first-input'
  | 'accepting-second-input'
  | 'display-calculation';

export type KeyboardOption = {
  id: string;
  type: KeyboardTypes;
  value: KeyboardValues;
};

export type KeyboardTypes =
  | 'number'
  | 'operator'
  | 'special-operator'
  | 'clear'
  | 'equals';
export type KeyboardValues =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '.'
  | '+/-'
  | '%'
  | '+'
  | '-'
  | '*'
  | '/'
  | '='
  | 'clear';

export type ColorModeThemeData = {
  primary: {
    main: string;
    light: string;
    medium: string;
    dark: string;
    unselected: string;
    highlight: string;
  };
  secondary: {
    main: string;
  };
};

export type ColorModeOption = 'light' | 'dark';
