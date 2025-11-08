import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import useWindowsStore from '../../store/windowsStore';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { 
    transform: translateY(50px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px ${theme.colors.accents.neonGreen};
  }
  50% { 
    box-shadow: 0 0 40px ${theme.colors.accents.neonGreen}, 0 0 60px ${theme.colors.accents.electricBlue};
  }
`;

const LogOffContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, 
    ${theme.colors.global.background} 0%,
    #1a1a1a  50%,
    ${theme.colors.global.background} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LogOffMessage = styled.div`
  font-family: ${theme.typography.fonts.primary};
  font-size: 48px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.neonGreen};
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  text-transform: uppercase;
  letter-spacing: 4px;
  animation: ${slideIn} 0.8s ease-out 0.2s both;
`;

const LogOffSubtext = styled.div`
  font-family: ${theme.typography.fonts.primary};
  font-size: 18px;
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: 60px;
  opacity: 0.8;
  animation: ${slideIn} 0.8s ease-out 0.4s both;
`;

const LoginButton = styled.button`
  background: ${theme.colors.accents.electricBlue};
  border: 4px solid ${theme.colors.text.primary};
  color: ${theme.colors.global.background};
  font-family: ${theme.typography.fonts.primary};
  font-size: 24px;
  font-weight: ${theme.typography.weights.bold};
  padding: 20px 40px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all ${theme.animations.fast};
  box-shadow: 8px 8px 0px ${theme.colors.global.shadow};
  text-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  animation: ${slideIn} 0.8s ease-out 0.6s both, ${pulseGlow} 3s ease-in-out infinite 1s;
  
  &:hover {
    background: ${theme.colors.accents.neonGreen};
    border-color: ${theme.colors.accents.hotPink};
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0px ${theme.colors.global.shadow};
  }
  
  &:active {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  }
`;

const UserIcon = styled.div`
  width: 120px;
  height: 120px;
  background: ${theme.colors.accents.hotPink};
  border: 6px solid ${theme.colors.text.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  margin-bottom: 40px;
  box-shadow: 8px 8px 0px ${theme.colors.global.shadow};
  animation: ${slideIn} 0.8s ease-out both;
`;

const LogOffScreen = () => {
  const { logIn } = useWindowsStore();

  const handleLogin = () => {
    logIn();
  };

  return (
    <LogOffContainer>
      <UserIcon>👤</UserIcon>
      <LogOffMessage>System Locked</LogOffMessage>
      <LogOffSubtext>
        Your session has been logged off for security.
        <br />
        Click below to log back in and resume your work.
      </LogOffSubtext>
      <LoginButton onClick={handleLogin}>
        Log In
      </LoginButton>
    </LogOffContainer>
  );
};

export default LogOffScreen;