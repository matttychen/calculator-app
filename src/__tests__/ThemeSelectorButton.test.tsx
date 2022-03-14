import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ThemeSelectorButton from '../shared/components/theme-selector-button';

describe('Theme Selector Button', () => {
  it('theme selector button should render', () => {
    expect(
      render(
        <ThemeSelectorButton colorTheme="light" setColorTheme={() => {}} />
      )
    ).toBeTruthy();
  });
});
