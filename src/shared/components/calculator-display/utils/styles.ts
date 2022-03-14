import styled from 'styled-components';

const CalculatorDisplayContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  row-gap: 14px;

  width: 100%;
  height: calc(100vh - (390px + 50px));
  padding: 0 30px 20px 30px;
  box-sizing: border-box;
`;

export default CalculatorDisplayContainer;
