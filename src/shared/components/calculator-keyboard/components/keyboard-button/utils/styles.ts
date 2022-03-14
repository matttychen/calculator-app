import styled, { css } from 'styled-components';

interface KeyboardButtonContainerProps {
  isZeroKey?: boolean;
  isOperator?: boolean;
  isSpecialOperator?: boolean;
}

const KeyboardButtonContainer = styled.div<KeyboardButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  padding: 5px 0 0 0;

  background-color: ${(props) => props.theme.primary.medium}};
  border-radius: 8px;
  box-sizing: border-box;
  
  font-family: 'Karbon', 'Helvetica';
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.secondary.main};
  user-select: none;

  ${(props) => {
    if (props.isZeroKey) {
      return css`
        grid-column: span 2;
      `;
    }

    if (props.isOperator) {
      return css`
        padding: 0px;
      `;
    }

    if (props.isSpecialOperator) {
      return css`
        padding: 0px;
        & > svg > g > g {
          stroke: ${props.theme.secondary.main} !important;
        }
      `;
    }

    return null;
  }}

  &:hover {
    cursor: default;
    filter: brightness(0.9);
  } 
`;

export default KeyboardButtonContainer;
