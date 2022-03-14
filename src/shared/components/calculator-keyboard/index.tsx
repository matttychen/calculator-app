import { KeyboardOptions } from '../../utils/constants';
import { KeyboardOption } from '../../utils/types';
import KeyboardButton from './components/keyboard-button';
import { CalculatorKeyboardContainer, BackgroundWrapper } from './utils/styles';

interface Props {
  onClickSelectKeyboardButton: (keyboardOption: KeyboardOption) => void;
  isProcessingInput: boolean;
}

const CalculatorKeyBoard = ({
  onClickSelectKeyboardButton,
  isProcessingInput,
}: Props) => {
  return (
    <BackgroundWrapper>
      <CalculatorKeyboardContainer>
        {KeyboardOptions.map((option: KeyboardOption) => (
          <KeyboardButton
            key={option.id}
            data={option}
            isProcessingInput={isProcessingInput}
            onClickSelectKeyboardButton={onClickSelectKeyboardButton}
          />
        ))}
      </CalculatorKeyboardContainer>
    </BackgroundWrapper>
  );
};

export default CalculatorKeyBoard;
