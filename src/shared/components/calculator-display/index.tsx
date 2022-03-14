import styled from 'styled-components';
import CalculationInput from './components/calculation-input';
import CalculationOutput from './components/calculation-output';

const CalculatorDisplayContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  row-gap: 14px;

  width: 100%;
  height: calc(100vh - (390px + 50px));
  padding: 0 30px 20px 30px;
  box-sizing: border-box;
`;

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
