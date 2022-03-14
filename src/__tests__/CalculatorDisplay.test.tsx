import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CalculationExpression from '../shared/components/calculator-display/components/calculation-expression';
import CalculatorDisplay from '../shared/components/calculator-display';
import CalculationResults from '../shared/components/calculator-display/components/calculation-results';

describe('Calculator Display', () => {
  it('calculator display should render', () => {
    expect(
      render(
        <CalculatorDisplay
          calculatorState="ACCEPTING_FIRST_INPUT"
          firstInput="1"
          operation=""
          secondInput=""
          calculatorResult=""
        />
      )
    ).toBeTruthy();
  });

  it('calculator expression', () => {
    expect(
      render(
        <CalculationExpression
          calculatorState="ACCEPTING_FIRST_INPUT"
          firstInput="1"
          operation=""
          secondInput=""
        />
      )
    ).toBeTruthy();
  });

  it('calculator results', () => {
    expect(
      render(
        <CalculationResults
          calculatorState="ACCEPTING_FIRST_INPUT"
          firstInput="1"
          secondInput=""
          calculatorResult=""
        />
      )
    ).toBeTruthy();
  });
});
