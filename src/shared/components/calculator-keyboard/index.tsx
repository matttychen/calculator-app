import React from 'react';
import { gray1 } from 'shared/utils/constants';
import styled from 'styled-components';

const CalculatorKeyboardContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 390px;

  background-color: ${gray1};
  border-radius: 40px 40px 0 0;
`;

const CalculatorKeyBoard = () => {
  return <CalculatorKeyboardContainer />;
};

export default CalculatorKeyBoard;
