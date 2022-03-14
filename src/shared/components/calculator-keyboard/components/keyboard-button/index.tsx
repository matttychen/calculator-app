import { OPERATOR_TYPE, SPECIAL_OPERATOR_TYPE } from 'shared/utils/constants';
import { KeyboardOption } from '../../../../utils/types';
import KeyboardButtonContents from '../keyboard-button-contents';
import KeyboardButtonContainer from './utils/styles';

interface Props {
  data: KeyboardOption;
  isProcessingInput: boolean;
  onClickSelectKeyboardButton: (keyboardOption: KeyboardOption) => void;
}

const KeyboardButton = ({
  data,
  isProcessingInput,
  onClickSelectKeyboardButton,
}: Props) => {
  const { value, type } = data;

  return (
    <KeyboardButtonContainer
      isOperator={type === OPERATOR_TYPE}
      isSpecialOperator={type === SPECIAL_OPERATOR_TYPE}
      isZeroKey={value === '0'}
      onClick={() => onClickSelectKeyboardButton(data)}
    >
      <KeyboardButtonContents
        value={value}
        isProcessingInput={isProcessingInput}
      />
    </KeyboardButtonContainer>
  );
};

export default KeyboardButton;
