import React from 'react';
import styled from 'styled-components';

const CalculationInputContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 24px;
  color: ${(props) => props.theme.secondary.main};
`;

const CalculationInput = () => {
  return <CalculationInputContainer>308 x 42</CalculationInputContainer>;
};

export default CalculationInput;
