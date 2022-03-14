import styled from 'styled-components';

const CalculationInputContainer = styled.div`
  font-family: 'Karbon', 'Helvetica';
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 24px;
  color: ${(props) => props.theme.primary.dark};

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

export default CalculationInputContainer;
