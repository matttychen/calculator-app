import DivideIcon from '../../../../icons/divide-icon';
import EqualsIcon from '../../../../icons/equals-icon';
import MinusIcon from '../../../../icons/minus-icon';
import MultiplyIcon from '../../../../icons/multiply-icon';
import PercentIcon from '../../../../icons/percent-icon';
import PlusIcon from '../../../../icons/plus-icon';
import PlusMinusIcon from '../../../../icons/plus-minus-icon';

interface KeyboardButtonContentsProps {
  value: string;
  isProcessingInput: boolean;
}

const KeyboardButtonContents = ({
  value,
  isProcessingInput,
}: KeyboardButtonContentsProps) => {
  if (value === '*') return <MultiplyIcon />;
  if (value === '-') return <MinusIcon />;
  if (value === '+') return <PlusIcon />;
  if (value === '/') return <DivideIcon />;
  if (value === '=') return <EqualsIcon />;
  if (value === '%') return <PercentIcon />;
  if (value === '+/-') return <PlusMinusIcon />;
  if (value === 'clear') {
    const content = isProcessingInput ? 'C' : 'AC';
    return <>{content}</>;
  }

  return <>{value}</>;
};

export default KeyboardButtonContents;
