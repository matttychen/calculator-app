import React from 'react';
import styled from 'styled-components';
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
      <CalculatorKeyBoard />
    </CalculatorContainer>
  );
};

export default Calculator;
