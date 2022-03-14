import { Dispatch, SetStateAction } from 'react';
import * as math from 'mathjs';
import {
  ACCEPTING_FIRST_INPUT,
  ACCEPTING_SECOND_INPUT,
  CLEAR_TYPE,
  DISPLAY_OUTPUT,
  EQUALS_TYPE,
  NUMBER_TYPE,
  OPERATOR_TYPE,
  SPECIAL_OPERATOR_TYPE,
} from './constants';
import { darkModeTheme, lightModeTheme } from './styles/theme';
import {
  CalculatorState,
  ColorModeOption,
  KeyboardOption,
  Operator,
  SpecialOperator,
} from './types';

/**
 * @description controls the color mode of the app
 * @param colorMode The selected color mode
 * @return The data of the selected color mode
 */
export const onSelectColorMode = (colorMode: ColorModeOption) => {
  switch (colorMode) {
    case 'light':
      return lightModeTheme;
    case 'dark':
      return darkModeTheme;
    default:
      return lightModeTheme;
  }
};

/**
 * @description performs a calculation between the two inputs for the given operation
 * @param setCalculatorResult To set the state of the result of the calculation
 * @param inputOne The first input
 * @param inputTwo The second input
 * @param operation The operation to perform
 */
export const onCalculate = (
  setCalculatorResult: Dispatch<SetStateAction<string>>,
  inputOne: string,
  inputTwo: string,
  operation: Operator
) => {
  const firstInputNumber = math.bignumber(inputOne);
  const secondInputNumber = math.bignumber(inputTwo);

  let result;
  switch (operation) {
    case '+':
      result = math.add(firstInputNumber, secondInputNumber);
      break;
    case '-':
      result = math.subtract(firstInputNumber, secondInputNumber);
      break;
    case '*':
      result = math.multiply(firstInputNumber, secondInputNumber);
      break;
    case '/':
      if (math.isZero(secondInputNumber)) {
        setCalculatorResult('UNDEFINED');
        return 'UNDEFINED';
      }
      result = math.divide(firstInputNumber, secondInputNumber);
      break;
    default:
      result = 0;
  }

  setCalculatorResult(result.toString());
  return result.toString();
};

/**
 * @description Performs an operation on the current input
 * @param operation The operation to perform
 * @param setInput To update the value of the current input state
 */
export const onHandleSpecialOperatorCalculations = (
  operation: SpecialOperator,
  setInput: Dispatch<SetStateAction<string>>
) => {
  switch (operation) {
    case '+/-':
      setInput((prev) => math.multiply(math.bignumber(prev), -1).toString());
      break;
    case '%':
      setInput((prev) => math.divide(math.bignumber(prev), 100).toString());
      break;
    default:
      setInput((prev) => prev);
  }
};

/**
 * @description Clears and resets all the states to the last calculated result or to a zero state
 * @param calculatorState The current state of the calculator
 * @param setCalculatorState To set the state of the calculator
 * @param setFirstInput To set the state of the first input
 * @param setSecondInput To set the state of the second input
 * @param setOperation To set the state of the the current operator
 * @param setIsProcessingInput To set whether user is inputting for a new calculation
 * @param calculatorResult The current calculated results
 * @param setCalculatorResult To set the state of the calculated results
 */
export const onHandleClear = (
  calculatorState: CalculatorState,
  setCalculatorState: Dispatch<SetStateAction<CalculatorState>>,
  setFirstInput: Dispatch<SetStateAction<string>>,
  setSecondInput: Dispatch<SetStateAction<string>>,
  setOperation: Dispatch<SetStateAction<Operator>>,
  setIsProcessingInput: Dispatch<SetStateAction<boolean>>,
  calculatorResult: string,
  setCalculatorResult: Dispatch<SetStateAction<string>>
) => {
  if (calculatorResult.length === 0 || calculatorState === DISPLAY_OUTPUT) {
    setFirstInput('0');
    setSecondInput('');
    setOperation('');
    setIsProcessingInput(false);
    setCalculatorResult('');
    setCalculatorState(ACCEPTING_FIRST_INPUT);
    return;
  }

  setFirstInput(calculatorResult);
  setSecondInput('');
  setOperation('');
  setIsProcessingInput(false);
  setCalculatorResult('');
  setCalculatorState(ACCEPTING_SECOND_INPUT);
};

/**
 * @description Updates the state of the value of the first input and calculator state
 * @param keyboardOption The calculator keyboard option selected
 * @param firstInput The current value of the first input
 * @param setFirstInput To update the state of the first input
 * @param setOperation To set the state of the current operator
 * @param setCalculatorState To set the state of the calculator
 */
export const onHandleFirstInput = (
  keyboardOption: KeyboardOption,
  firstInput: string,
  setFirstInput: Dispatch<SetStateAction<string>>,
  setOperation: Dispatch<SetStateAction<Operator>>,
  setCalculatorState: Dispatch<SetStateAction<CalculatorState>>
) => {
  if (keyboardOption.type === NUMBER_TYPE) {
    if (firstInput === '0') {
      if (keyboardOption.value === '0') return;
      if (keyboardOption.value === '.') {
        setFirstInput('0.');
        return;
      }

      setFirstInput(keyboardOption.value);
      return;
    }

    if (keyboardOption.value === '.' && firstInput.includes('.')) return;

    setFirstInput((prev) => prev.concat(keyboardOption.value));
  }

  if (keyboardOption.type === OPERATOR_TYPE) {
    setOperation(keyboardOption.value as Operator);
    setCalculatorState(ACCEPTING_SECOND_INPUT);
  }

  if (keyboardOption.type === SPECIAL_OPERATOR_TYPE) {
    onHandleSpecialOperatorCalculations(
      keyboardOption.value as SpecialOperator,
      setFirstInput
    );
  }
};

/**
 * @description Updates the state of the value of the second input and calculator state
 * @param keyboardOption The calculator keyboard option selected
 * @param firstInput The current value of the first input
 * @param secondInput The current value of the second input
 * @param setSecondInput To update the state of the second input
 * @param operation The current operator selected
 * @param setOperation To set the state of the current operator
 * @param setCalculatorState To set the state of the calculator
 * @param setCalculatorResult To set the state of the calculated results for the expression
 * @param setIsProcessingInput To set whether user is inputting for a new calculation
 */
export const onHandleSecondInput = (
  keyboardOption: KeyboardOption,
  firstInput: string,
  secondInput: string,
  setSecondInput: Dispatch<SetStateAction<string>>,
  operation: Operator,
  setOperation: Dispatch<SetStateAction<Operator>>,
  setCalculatorState: Dispatch<SetStateAction<CalculatorState>>,
  setCalculatorResult: Dispatch<SetStateAction<string>>,
  setIsProcessingInput: Dispatch<SetStateAction<boolean>>
) => {
  if (keyboardOption.type === NUMBER_TYPE) {
    if (secondInput.length === 0 && keyboardOption.value === '.') {
      setSecondInput('0.');
      return;
    }

    if (secondInput === '0') {
      if (keyboardOption.value === '0') return;

      setSecondInput(keyboardOption.value);
      return;
    }

    if (keyboardOption.value === '.' && secondInput.includes('.')) return;

    setSecondInput((prev) => prev.concat(keyboardOption.value));
  }

  if (keyboardOption.type === OPERATOR_TYPE) {
    if (secondInput.length === 0) {
      setOperation(keyboardOption.value as Operator);
      return;
    }

    onCalculate(setCalculatorResult, firstInput, secondInput, operation);
    setCalculatorState(DISPLAY_OUTPUT);
  }

  if (keyboardOption.type === EQUALS_TYPE) {
    if (operation === '') {
      setCalculatorState(ACCEPTING_FIRST_INPUT);
      return;
    }

    setIsProcessingInput(false);
    if (secondInput.length === 0) {
      setSecondInput(firstInput);
      onCalculate(setCalculatorResult, firstInput, firstInput, operation);
      setCalculatorState(DISPLAY_OUTPUT);
      return;
    }

    onCalculate(setCalculatorResult, firstInput, secondInput, operation);
    setCalculatorState(DISPLAY_OUTPUT);
  }

  if (keyboardOption.type === SPECIAL_OPERATOR_TYPE) {
    onHandleSpecialOperatorCalculations(
      keyboardOption.value as SpecialOperator,
      setSecondInput
    );
  }
};

/**
 * @description Updates multiple state depending on input after an expression has already been calculated
 * @param keyboardOption The calculator keyboard option selected
 * @param setFirstInput To set the state of the first input
 * @param secondInput The current value of the second input
 * @param setSecondInput To set the state of the second input
 * @param operation The current operation selected
 * @param setOperation To set the state of the current operator
 * @param calculatorResult The current calculated results
 * @param setCalculatorResult To set the state of the calculated results
 * @param setCalculatorState To set the state of the calculator
 * @param setIsProcessingInput To set whether user is inputting for a new calculation
 */
export const onHandleDisplayOutput = (
  keyboardOption: KeyboardOption,
  setFirstInput: Dispatch<SetStateAction<string>>,
  secondInput: string,
  setSecondInput: Dispatch<SetStateAction<string>>,
  operation: Operator,
  setOperation: Dispatch<SetStateAction<Operator>>,
  calculatorResult: string,
  setCalculatorResult: Dispatch<SetStateAction<string>>,
  setCalculatorState: Dispatch<SetStateAction<CalculatorState>>,
  setIsProcessingInput: Dispatch<SetStateAction<boolean>>
) => {
  if (keyboardOption.type === NUMBER_TYPE) {
    if (keyboardOption.value === '.') setFirstInput('0.');
    else setFirstInput(keyboardOption.value);
    setSecondInput('');
    setOperation('');
    setCalculatorResult('');
    setCalculatorState(ACCEPTING_FIRST_INPUT);
  }

  if (calculatorResult === 'UNDEFINED') return;

  if (keyboardOption.type === OPERATOR_TYPE) {
    setFirstInput(calculatorResult);
    setSecondInput('');
    setOperation(keyboardOption.value as Operator);
    setCalculatorState(ACCEPTING_SECOND_INPUT);
  }

  if (keyboardOption.type === EQUALS_TYPE) {
    setFirstInput(calculatorResult);
    onCalculate(setCalculatorResult, calculatorResult, secondInput, operation);
  }

  if (keyboardOption.type === SPECIAL_OPERATOR_TYPE) {
    if (keyboardOption.value === '+/-') {
      setFirstInput(calculatorResult);
      setSecondInput('-1');
      setOperation('*');
    } else {
      setFirstInput(calculatorResult);
      setOperation('/');
      setSecondInput('100');
    }

    setIsProcessingInput(false);
    onHandleSpecialOperatorCalculations(
      keyboardOption.value as SpecialOperator,
      setCalculatorResult
    );
  }
};

/**
 * @description The main function that directs the logic to other functions when a calculator button is clicked
 * @param keyboardOption The calculator keyboard option selected
 * @param firstInput The current value of the first input
 * @param setFirstInput To set the state of the first input
 * @param secondInput The current value of the second input
 * @param setSecondInput To set the state of the second input
 * @param operation The current operator selected
 * @param setOperation To set the state of the current operator
 * @param calculatorResult The current calculated results
 * @param setCalculatorResult To see the state of the calculated results
 * @param calculatorState The current state of the calculator
 * @param setCalculatorState To set the state of the calculator
 * @param setIsProcessingInput To set whether user is inputting for a new calculation
 */
export const onHandleSelectKeyboardButton = (
  keyboardOption: KeyboardOption,
  firstInput: string,
  setFirstInput: Dispatch<SetStateAction<string>>,
  secondInput: string,
  setSecondInput: Dispatch<SetStateAction<string>>,
  operation: Operator,
  setOperation: Dispatch<SetStateAction<Operator>>,
  calculatorResult: string,
  setCalculatorResult: Dispatch<SetStateAction<string>>,
  calculatorState: CalculatorState,
  setCalculatorState: Dispatch<SetStateAction<CalculatorState>>,
  setIsProcessingInput: Dispatch<SetStateAction<boolean>>
) => {
  if (keyboardOption.type === CLEAR_TYPE) {
    onHandleClear(
      calculatorState,
      setCalculatorState,
      setFirstInput,
      setSecondInput,
      setOperation,
      setIsProcessingInput,
      calculatorResult,
      setCalculatorResult
    );
  }

  if (calculatorState === ACCEPTING_FIRST_INPUT) {
    onHandleFirstInput(
      keyboardOption,
      firstInput,
      setFirstInput,
      setOperation,
      setCalculatorState
    );
  }
  if (calculatorState === ACCEPTING_SECOND_INPUT) {
    onHandleSecondInput(
      keyboardOption,
      firstInput,
      secondInput,
      setSecondInput,
      operation,
      setOperation,
      setCalculatorState,
      setCalculatorResult,
      setIsProcessingInput
    );
  }
  if (calculatorState === DISPLAY_OUTPUT) {
    onHandleDisplayOutput(
      keyboardOption,
      setFirstInput,
      secondInput,
      setSecondInput,
      operation,
      setOperation,
      calculatorResult,
      setCalculatorResult,
      setCalculatorState,
      setIsProcessingInput
    );
  }
};
