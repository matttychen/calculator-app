import CalculationInput from './components/calculation-input';
import CalculationOutput from './components/calculation-output';
import CalculatorDisplayContainer from './utils/styles';

interface Props {
  calculatorState: string;
  firstInput: string;
  operation: string;
  secondInput: string;
  calculatorResult: string;
}

const CalculatorDisplay = ({
  calculatorState,
  firstInput,
  operation,
  secondInput,
  calculatorResult,
}: Props) => {
  return (
    <CalculatorDisplayContainer>
      <CalculationInput
        calculatorState={calculatorState}
        firstInput={firstInput}
        operation={operation}
        secondInput={secondInput}
      />
      <CalculationOutput
        calculatorState={calculatorState}
        firstInput={firstInput}
        secondInput={secondInput}
        calculatorResult={calculatorResult}
      />
    </CalculatorDisplayContainer>
  );
};

export default CalculatorDisplay;
