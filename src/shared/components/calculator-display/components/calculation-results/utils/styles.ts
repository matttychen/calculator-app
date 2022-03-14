import styled from 'styled-components';
import { white } from '../../../../../utils/styles/colors';

const CalculationResultsContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 3px;
  line-height: 48px;
  height: 48px;
  color: ${(props) => props.theme?.secondary?.main ?? white};
  width: 100%;
  overflow: auto;
  text-align: right;

  &:hover {
    cursor: default;
  }
`;

export default CalculationResultsContainer;
