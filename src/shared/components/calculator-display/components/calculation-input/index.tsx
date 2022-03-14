import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
} from '../../../../utils/constants';

const CalculationInputContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 24px;
  color: ${(props) => props.theme.primary.dark};

  width: 100%;
  max-height: 24px;
  text-align: right;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: thin;

  &:hover {
    cursor: default;
  }
`;

interface Props {
  calculatorState: string;
  firstInput: string;
  operation: string;
  secondInput: string;
}

const CalculationInput = ({
  calculatorState,
  firstInput,
  operation,
  secondInput,
}: Props) => {
  const inputRef = useRef<any>(null);
  let expression = `${firstInput} ${operation} ${secondInput}`;

  useEffect(() => {
    if (inputRef.current === null) return;

    const scrollWidth = inputRef.current?.scrollWidth;
    inputRef.current.scrollLeft = scrollWidth;
  }, [expression]);

  if (calculatorState === ACCEPTING_FIRST_INPUT) return null;

  if (calculatorState === ACCEPTING_SECOND_INPUT) {
    expression = `${firstInput} ${operation}`;
  }

  return (
    <CalculationInputContainer ref={inputRef}>
      {expression}
    </CalculationInputContainer>
  );
};

export default CalculationInput;
