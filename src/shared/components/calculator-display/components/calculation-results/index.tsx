import { useEffect, useRef } from 'react';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
} from '../../../../utils/constants';
import CalculationResultsContainer from './utils/styles';

interface Props {
  calculatorState: string;
  firstInput: string;
  secondInput: string;
  calculatorResult: string;
}

const CalculationResults = ({
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

  const renderOutputContent = () => {
    if (calculatorState === ACCEPTING_FIRST_INPUT) {
      return firstInput;
    }
    if (calculatorState === ACCEPTING_SECOND_INPUT) {
      return secondInput;
    }

    return calculatorResult;
  };

  return (
    <CalculationResultsContainer ref={inputRef}>
      {renderOutputContent()}
    </CalculationResultsContainer>
  );
};

export default CalculationResults;
