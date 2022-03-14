import styled, { css } from 'styled-components';
import DivideIcon from '../../../../icons/divide-icon';
import EqualsIcon from '../../../../icons/equals-icon';
import MinusIcon from '../../../../icons/minus-icon';
import MultiplyIcon from '../../../../icons/multiply-icon';
import PercentIcon from '../../../../icons/percent-icon';
import PlusIcon from '../../../../icons/plus-icon';
import PlusMinusIcon from '../../../../icons/plus-minus-icon';
import { KeyboardOption } from '../../../../utils/types';

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

interface Props {
  data: KeyboardOption;
  isProcessingInput: boolean;
}

const KeyboardButton = ({ data, isProcessingInput }: Props) => {
  if (data.value === '*') {
    return (
      <KeyboardButtonContainer isOperator>
        <MultiplyIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '-') {
    return (
      <KeyboardButtonContainer isOperator>
        <MinusIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '+') {
    return (
      <KeyboardButtonContainer isOperator>
        <PlusIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '/') {
    return (
      <KeyboardButtonContainer isOperator>
        <DivideIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '=') {
    return (
      <KeyboardButtonContainer isOperator>
        <EqualsIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '%') {
    return (
      <KeyboardButtonContainer isSpecialOperator>
        <PercentIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === '+/-') {
    return (
      <KeyboardButtonContainer isSpecialOperator>
        <PlusMinusIcon />
      </KeyboardButtonContainer>
    );
  }

  if (data.value === 'clear') {
    const content = isProcessingInput ? 'C' : 'AC';
    return <KeyboardButtonContainer>{content}</KeyboardButtonContainer>;
  }

  return (
    <KeyboardButtonContainer isZeroKey={data.value === '0'}>
      {data.value}
    </KeyboardButtonContainer>
  );
};

export default KeyboardButton;
