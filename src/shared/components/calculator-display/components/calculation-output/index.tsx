import React from 'react';
import styled from 'styled-components';

const CalculationOutputContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 3px;
  line-height: 48px;
  color: ${(props) => props.theme.secondary.main};
`;

const CalculationOutput = () => {
  return <CalculationOutputContainer>12,936</CalculationOutputContainer>;
};

export default CalculationOutput;
