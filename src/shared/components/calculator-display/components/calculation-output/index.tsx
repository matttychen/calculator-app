import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
  DISPLAY_OUTPUT,
} from '../../../../utils/constants';

const CalculationOutputContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 3px;
  line-height: 48px;
  height: 48px;
  color: ${(props) => props.theme.secondary.main};
  width: 100%;
  overflow: auto;
  text-align: right;

  &:hover {
    cursor: default;
  }
`;

interface Props {
  calculatorState: string;
  firstInput: string;
  secondInput: string;
  calculatorResult: string;
}

const CalculationOutput = ({
  calculatorState,
  firstInput,
  secondInput,
  calculatorResult,
}: Props) => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current === null) return;

    const scrollWidth = inputRef.current?.scrollWidth;
    inputRef.current.scrollLeft = scrollWidth;
  }, [firstInput, secondInput, calculatorResult]);

  if (calculatorState === ACCEPTING_FIRST_INPUT) {
    return (
      <CalculationOutputContainer ref={inputRef}>
        {firstInput}
      </CalculationOutputContainer>
    );
  }
  if (calculatorState === ACCEPTING_SECOND_INPUT) {
    return (
      <CalculationOutputContainer ref={inputRef}>
        {secondInput}
      </CalculationOutputContainer>
    );
  }

  if (calculatorState === DISPLAY_OUTPUT) {
    return (
      <CalculationOutputContainer ref={inputRef}>
        {calculatorResult}
      </CalculationOutputContainer>
    );
  }

  return null;
};

export default CalculationOutput;
