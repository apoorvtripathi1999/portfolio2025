import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const StartButtonContainer = styled.button`
  height: 40px;
  padding: 0 20px;
  background: ${theme.colors.taskbar.startButton.background};
  border: 4px solid ${theme.colors.taskbar.startButton.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.typography.fonts.display};
  font-size: 16px;
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.taskbar.startButton.text};
  text-shadow: 2px 2px 0px ${theme.colors.global.background};
  user-select: none;
  margin: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all ${theme.animations.fast};
  box-shadow: ${theme.colors.taskbar.startButton.shadow};
  
  &:hover {
    background: ${theme.colors.taskbar.startButton.backgroundHover};
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px ${theme.colors.accents.neonGreen};
    text-shadow: 2px 2px 0px ${theme.colors.global.background}, 0 0 10px ${theme.colors.accents.neonGreen};
  }
  
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px ${theme.colors.accents.neonGreen};
  }
  
  &:focus {
    outline: 3px solid ${theme.colors.accents.cyberYellow};
    outline-offset: 2px;
  }
`;

const StartButton = ({ onClick }) => {
  return (
    <StartButtonContainer onClick={onClick}>
      start
    </StartButtonContainer>
  );
};

export default StartButton;
