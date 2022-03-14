import { useEffect, useRef } from 'react';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
} from '../../../../utils/constants';
import CalculationInputContainer from './utils/styles';

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
  let expression = `${firstInput} ${operation} ${secondInput}`;

  const inputRef = useRef<any>(null);

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
