import styled, { css } from 'styled-components';
import { grayLight, grayMedium, white } from '../../../utils/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px 0 0 0;
`;

export const ThemeSelectorButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  width: 72px;
  height: 30px;

  border-radius: 10px;
  background-color: ${(props) => props.theme?.primary?.light ?? grayLight};
`;

interface IconContainerProps {
  icon: string;
  selected: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 18px;
  height: 18px;

  ${(props) => {
    // If the icon is selected, change the color of the icon to selected
    if (props.selected) {
      if (props.icon === 'sun-icon') {
        return css`
          & > svg > g > g {
            fill: ${props.theme?.secondary?.main ?? white} !important;
          }
        `;
      }

      return css`
        & > svg > g > g {
          stroke: ${props.theme?.secondary?.main ?? white} !important;
        }
      `;
    }

    // If the icon is not selected, change the color of the icon to not selected
    if (props.icon === 'sun-icon') {
      return css`
        & > svg > g > g {
          fill: ${props.theme?.primary?.unselected ?? grayMedium} !important;
        }

        &:hover {
          cursor: pointer;
          filter: brightness(0.8);
        }
      `;
    }

    return css`
      & > svg > g > g {
        stroke: ${props.theme?.primary?.unselected ?? grayMedium} !important;
      }

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
      }
    `;
  }}
`;
