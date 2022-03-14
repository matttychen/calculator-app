import CalculationExpression from './components/calculation-expression';
import CalculationResults from './components/calculation-results';
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
      <CalculationExpression
        calculatorState={calculatorState}
        firstInput={firstInput}
        operation={operation}
        secondInput={secondInput}
      />
      <CalculationResults
        calculatorState={calculatorState}
        firstInput={firstInput}
        secondInput={secondInput}
        calculatorResult={calculatorResult}
      />
    </CalculatorDisplayContainer>
  );
};

export default CalculatorDisplay;
