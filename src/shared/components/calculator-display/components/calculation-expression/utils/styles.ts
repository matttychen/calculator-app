import styled from 'styled-components';
import { grayDark } from '../../../../../utils/styles/colors';

const CalculationExpressionContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 24px;
  color: ${(props) => props.theme?.primary?.dark ?? grayDark};

  width: 100%;
  max-height: 24px;
  text-align: right;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: thin;

  &:hover {
    cursor: default;
  }
`;

export default CalculationExpressionContainer;
