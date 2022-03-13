import React from 'react';
import styled from 'styled-components';
import CalculationInput from './components/calculation-input';
import CalculationOutput from './components/calculation-output';

const CalculatorDisplayContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  row-gap: 14px;
  width: 100%;
`;

const CalculatorDisplay = () => {
  return (
    <CalculatorDisplayContainer>
      <CalculationInput />
      <CalculationOutput />
    </CalculatorDisplayContainer>
  );
};

export default CalculatorDisplay;
