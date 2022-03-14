import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 390px;

  background-color: ${(props) => props.theme.primary.light};
  border-radius: 40px 40px 0 0;
`;

export const CalculatorKeyboardContainer = styled.div`
  display: grid;
  grid-template: repeat(5, 50px) / repeat(4, 50px);
  grid-gap: 20px;
`;
