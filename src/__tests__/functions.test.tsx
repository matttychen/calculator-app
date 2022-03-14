import '@testing-library/jest-dom';
import * as math from 'mathjs';
import { onCalculate } from '../shared/utils/functions';

describe('onCalculate', () => {
  it('adding two numbers', () => {
    expect(onCalculate(() => {}, '1', '2', '+')).toEqual('3');
  });

  it('adding two decimals', () => {
    expect(onCalculate(() => {}, '0.1', '0.2', '+')).toEqual('0.3');
  });

  it('multiplying two numbers', () => {
    expect(onCalculate(() => {}, '4', '5', '*')).toEqual('20');
  });

  it('multiplying two decimals', () => {
    expect(onCalculate(() => {}, '0.2', '0.2', '*')).toEqual('0.04');
  });

  it('subtracting two numbers', () => {
    expect(onCalculate(() => {}, '3', '5', '-')).toEqual('-2');
  });

  it('subtracting two decimals', () => {
    expect(onCalculate(() => {}, '0.3', '0.1', '-')).toEqual('0.2');
  });

  it('dividing two numbers', () => {
    expect(onCalculate(() => {}, '24', '8', '/')).toEqual('3');
  });

  it('dividing two decimals', () => {
    expect(onCalculate(() => {}, '2.4', '0.8', '/')).toEqual('3');
  });
});

describe('onHandleSpecialOperatorCalculations', () => {
  it('getting the negative of a number', () => {
    expect(math.multiply(math.bignumber(5), -1).toString()).toEqual('-5');
  });

  it('getting the percent of a number', () => {
    expect(math.divide(math.bignumber(10), 5).toString()).toEqual('2');
  });
});
