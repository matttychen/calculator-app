import React, { useState } from 'react';
import onSelectColorTheme from 'shared/utils/functions';
import { ColorModeOption } from 'shared/utils/types';
import styled, { ThemeProvider } from 'styled-components';
import CalculatorDisplay from '../calculator-display';
import CalculatorKeyBoard from '../calculator-keyboard';
import ThemeSelectorButton from '../theme-selector-button';

const CalculatorContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary.main};
`;

const Calculator = () => {
  const [colorTheme, setColorTheme] = useState<ColorModeOption>('light');

  return (
    <ThemeProvider theme={onSelectColorTheme(colorTheme)}>
      <CalculatorContainer>
        <ThemeSelectorButton
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
        <CalculatorDisplay />
        <CalculatorKeyBoard />
      </CalculatorContainer>
    </ThemeProvider>
  );
};

export default Calculator;
