import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  CalculatorState,
  ColorModeOption,
  KeyboardOption,
  Operator,
} from '../../utils/types';
import {
  onHandleSelectKeyboardButton,
  onSelectColorMode,
} from '../../utils/functions';
import { ACCEPTING_FIRST_INPUT, LIGHT_THEME } from '../../utils/constants';
import CalculatorDisplay from '../calculator-display';
import CalculatorKeyBoard from '../calculator-keyboard';
import ThemeSelectorButton from '../theme-selector-button';

const CalculatorContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary.main};
`;

const Calculator = () => {
  const [colorTheme, setColorTheme] = useState<ColorModeOption>(LIGHT_THEME);
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(
    ACCEPTING_FIRST_INPUT
  );
  const [isProcessingInput, setIsProcessingInput] = useState<boolean>(false);

  const [firstInput, setFirstInput] = useState<string>('0');
  const [operation, setOperation] = useState<Operator>('');
  const [secondInput, setSecondInput] = useState<string>('');
  const [calculatorResult, setCalculatorResult] = useState<string>('');

  useEffect(() => {
    setIsProcessingInput(firstInput !== '0' || secondInput.length !== 0);
  }, [firstInput, secondInput]);

  const onClickSelectKeyboardButton = (keyboardOption: KeyboardOption) => {
    onHandleSelectKeyboardButton(
      keyboardOption,
      firstInput,
      setFirstInput,
      secondInput,
      setSecondInput,
      operation,
      setOperation,
      calculatorResult,
      setCalculatorResult,
      calculatorState,
      setCalculatorState,
      setIsProcessingInput
    );
  };

  return (
    <ThemeProvider theme={onSelectColorMode(colorTheme)}>
      <CalculatorContainer>
        <ThemeSelectorButton
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
        <CalculatorDisplay
          calculatorState={calculatorState}
          firstInput={firstInput}
          operation={operation}
          secondInput={secondInput}
          calculatorResult={calculatorResult}
        />
        <CalculatorKeyBoard
          onClickSelectKeyboardButton={onClickSelectKeyboardButton}
          isProcessingInput={isProcessingInput}
        />
      </CalculatorContainer>
    </ThemeProvider>
  );
};

export default Calculator;
