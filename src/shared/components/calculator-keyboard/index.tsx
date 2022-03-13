import React from 'react';
import styled from 'styled-components';

const CalculatorKeyboardContainer = styled.div`
  width: 100%;
  height: 390px;

  background-color: ${(props) => props.theme.primary.light};
  border-radius: 40px 40px 0 0;
`;

const CalculatorKeyBoard = () => {
  return <CalculatorKeyboardContainer />;
};

export default CalculatorKeyBoard;
