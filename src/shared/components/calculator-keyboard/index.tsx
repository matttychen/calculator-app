import styled, { css } from 'styled-components';
import { KeyboardOptions } from '../../utils/constants';
import { KeyboardOption } from '../../utils/types';
import KeyboardButton from './components/keyboard-button';

const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 390px;

  background-color: ${(props) => props.theme.primary.light};
  border-radius: 40px 40px 0 0;
`;

const CalculatorKeyboardContainer = styled.div`
  display: grid;
  grid-template: repeat(5, 50px) / repeat(4, 50px);
  grid-gap: 20px;
`;

interface KeyboardButtonContainerProps {
  isZeroKey: boolean;
}

const KeyboardButtonContainer = styled.div<KeyboardButtonContainerProps>`
  ${(props) => {
    if (props.isZeroKey) {
      return css`
        grid-column: span 2;
      `;
    }
    return null;
  }}
`;

interface Props {
  onClickSelectKeyboardButton: (keyboardOption: KeyboardOption) => void;
  isProcessingInput: boolean;
}

const CalculatorKeyBoard = ({
  onClickSelectKeyboardButton,
  isProcessingInput,
}: Props) => {
  return (
    <ScreenWrapper>
      <CalculatorKeyboardContainer>
        {KeyboardOptions.map((option: KeyboardOption) => (
          <KeyboardButtonContainer
            key={option.id}
            isZeroKey={option.value === '0'}
            onClick={() => onClickSelectKeyboardButton(option)}
          >
            <KeyboardButton
              data={option}
              isProcessingInput={isProcessingInput}
            />
          </KeyboardButtonContainer>
        ))}
      </CalculatorKeyboardContainer>
    </ScreenWrapper>
  );
};

export default CalculatorKeyBoard;
