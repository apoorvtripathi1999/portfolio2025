import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const fadeOut = keyframes`
  0% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.8; 
    transform: scale(0.95);
  }
  100% { 
    opacity: 0; 
    transform: scale(0.9);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const powerOffGlow = keyframes`
  0% {
    box-shadow: 0 0 0px ${theme.colors.accents.electricBlue};
  }
  50% {
    box-shadow: 0 0 100px ${theme.colors.accents.electricBlue}, 
                0 0 200px ${theme.colors.accents.neonGreen};
  }
  100% {
    box-shadow: 0 0 0px ${theme.colors.accents.electricBlue};
    opacity: 0;
  }
`;

const LogOffAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, 
    ${theme.colors.global.background} 0%,
    #2a2a2a 50%,
    ${theme.colors.global.background} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  animation: ${fadeOut} 2s ease-out forwards;
`;

const PowerOffAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.global.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  animation: ${powerOffGlow} 3s ease-out forwards;
`;

const LogOffMessage = styled.div`
  font-family: ${theme.typography.fonts.primary};
  font-size: 36px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.neonGreen};
  text-align: center;
  text-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${slideDown} 2s ease-in forwards;
`;

const PowerOffMessage = styled.div`
  font-family: ${theme.typography.fonts.primary};
  font-size: 48px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.electricBlue};
  text-align: center;
  text-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 40px;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 8px;
  background: #333333;
  border: 2px solid ${theme.colors.text.primary};
  margin-top: 40px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    background: linear-gradient(90deg, 
      ${theme.colors.accents.neonGreen} 0%,
      ${theme.colors.accents.electricBlue} 50%,
      ${theme.colors.accents.hotPink} 100%);
    animation: loading 1.5s ease-out infinite;
  }
  
  @keyframes loading {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(300px); }
  }
`;

const ShutdownAnimations = ({ type }) => {
  if (type === 'logging-off') {
    return (
      <LogOffAnimation>
        <LogOffMessage>Logging Off...</LogOffMessage>
        <LoadingBar />
      </LogOffAnimation>
    );
  }

  if (type === 'powering-off') {
    return (
      <PowerOffAnimation>
        <PowerOffMessage>Shutting Down...</PowerOffMessage>
        <LoadingBar />
      </PowerOffAnimation>
    );
  }

  return null;
};

export default ShutdownAnimations;