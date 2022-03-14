import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculator from '../shared/components/calculator';

describe('Calculator', () => {
  it('should render', () => {
    expect(render(<Calculator />)).toBeTruthy();
  });
});
