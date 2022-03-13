import React from 'react';
import styled from 'styled-components';
import CalculationInput from './components/calculation-input';
import CalculationOutput from './components/calculation-output';

const CalculatorDisplayContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  row-gap: 14px;

  width: 100%;
  height: calc(100vh - (390px + 50px));
  padding: 0 30px 20px 0;
  box-sizing: border-box;
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
