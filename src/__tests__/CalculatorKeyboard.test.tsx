import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CalculatorKeyBoard from '../shared/components/calculator-keyboard';

describe('Calculator Keyboard', () => {
  it('calculator keyboard should render', () => {
    expect(
      render(
        <CalculatorKeyBoard
          isProcessingInput={false}
          onClickSelectKeyboardButton={() => {}}
        />
      )
    ).toBeTruthy();
  });
});
