import { Dispatch, SetStateAction } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../../utils/constants';
import MoonIcon from '../../icons/moon-icon';
import SunIcon from '../../icons/sun-icon';
import { ColorModeOption } from '../../utils/types';
import {
  IconContainer,
  ThemeSelectorButtonContainer,
  Wrapper,
} from './utils/styles';

interface Props {
  colorTheme: ColorModeOption;
  setColorTheme: Dispatch<SetStateAction<ColorModeOption>>;
}

const ThemeSelectorButton = ({ colorTheme, setColorTheme }: Props) => {
  const onClickSelectColorTheme = (colorMode: ColorModeOption) => {
    setColorTheme(colorMode);
  };

  return (
    <Wrapper>
      <ThemeSelectorButtonContainer>
        <IconContainer
          icon="sun-icon"
          selected={colorTheme === LIGHT_THEME}
          onClick={() => onClickSelectColorTheme(LIGHT_THEME)}
        >
          <SunIcon />
        </IconContainer>
        <IconContainer
          icon="moon-icon"
          selected={colorTheme === DARK_THEME}
          onClick={() => onClickSelectColorTheme(DARK_THEME)}
        >
          <MoonIcon />
        </IconContainer>
      </ThemeSelectorButtonContainer>
    </Wrapper>
  );
};

export default ThemeSelectorButton;
