import React from 'react';
import styled from 'styled-components';
import CalculatorDisplay from '../calculator-display';
import CalculatorKeyBoard from '../calculator-keyboard';
import ThemeSelectorButton from '../theme-selector-button';

const CalculatorContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Calculator = () => {
  return (
    <CalculatorContainer>
      <ThemeSelectorButton />
      <CalculatorDisplay />
      <CalculatorKeyBoard />
    </CalculatorContainer>
  );
};

export default Calculator;
