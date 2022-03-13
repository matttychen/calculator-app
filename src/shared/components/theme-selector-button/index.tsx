import React, { Dispatch, SetStateAction } from 'react';
import MoonIcon from 'shared/icons/moon-icon';
import SunIcon from 'shared/icons/sun-icon';
import { ColorModeOption } from 'shared/utils/types';
import styled, { css } from 'styled-components';

const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px 0 0 0;
`;

const ThemeSelectorButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  width: 72px;
  height: 30px;

  border-radius: 10px;
  background-color: ${(props) => props.theme.primary.light};
`;

interface IconContainerProps {
  icon: string;
  selected: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  width: 18px;
  height: 18px;

  ${(props) => {
    if (props.selected) {
      if (props.icon === 'sun-icon') {
        return css`
          & > svg > g > g {
            fill: ${props.theme.secondary.main} !important;
          }
        `;
      }

      return css`
        & > svg > g > g {
          stroke: ${props.theme.secondary.main} !important;
        }
      `;
    }

    if (props.icon === 'sun-icon') {
      return css`
        & > svg > g > g {
          fill: ${props.theme.primary.unselected} !important;
        }

        &:hover {
          cursor: pointer;
          filter: brightness(0.8);
        }
      `;
    }

    return css`
      & > svg > g > g {
        stroke: ${props.theme.primary.unselected} !important;
      }

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    `;
  }}
`;

interface Props {
  colorTheme: ColorModeOption;
  setColorTheme: Dispatch<SetStateAction<ColorModeOption>>;
}

const ThemeSelectorButton = ({ colorTheme, setColorTheme }: Props) => {
  const onClickSelectColorTheme = (colorMode: ColorModeOption) => {
    setColorTheme(colorMode);
  };

  return (
    <ScreenWrapper>
      <ThemeSelectorButtonContainer>
        <IconContainer
          icon="sun-icon"
          selected={colorTheme === 'light'}
          onClick={() => onClickSelectColorTheme('light')}
        >
          <SunIcon />
        </IconContainer>
        <IconContainer
          icon="moon-icon"
          selected={colorTheme === 'dark'}
          onClick={() => onClickSelectColorTheme('dark')}
        >
          <MoonIcon />
        </IconContainer>
      </ThemeSelectorButtonContainer>
    </ScreenWrapper>
  );
};

export default ThemeSelectorButton;
