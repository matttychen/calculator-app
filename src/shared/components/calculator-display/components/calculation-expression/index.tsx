import { useEffect, useRef } from 'react';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
} from '../../../../utils/constants';
import CalculationExpressionContainer from './utils/styles';

interface Props {
  calculatorState: string;
  firstInput: string;
  operation: string;
  secondInput: string;
}

const CalculationExpression = ({
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
    <CalculationExpressionContainer ref={inputRef}>
      {expression}
    </CalculationExpressionContainer>
  );
};

export default CalculationExpression;
