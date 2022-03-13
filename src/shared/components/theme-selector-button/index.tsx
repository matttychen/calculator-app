import React from 'react';
import MoonIcon from 'shared/icons/moon-icon';
import SunIcon from 'shared/icons/sun-icon';
import { gray1 } from 'shared/utils/constants';
import styled from 'styled-components';

const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px 0 0 0;
`;

const ThemeSelectorButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  width: 72px;
  height: 30px;

  border-radius: 10px;
  background-color: ${gray1};
`;

const IconContainer = styled.div`
  width: 18px;
  height: 18px;
`;

const ThemeSelectorButton = () => {
  return (
    <ScreenWrapper>
      <ThemeSelectorButtonContainer>
        <IconContainer>
          <SunIcon />
        </IconContainer>
        <IconContainer>
          <MoonIcon />
        </IconContainer>
      </ThemeSelectorButtonContainer>
    </ScreenWrapper>
  );
};

export default ThemeSelectorButton;
