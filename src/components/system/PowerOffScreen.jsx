import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import useWindowsStore from '../../store/windowsStore';

const fadeToBlack = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const PowerOffContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
`;

const RestartMessage = styled.div`
  font-family: ${theme.typography.fonts.primary};
  font-size: 24px;
  font-weight: ${theme.typography.weights.medium};
  color: #333333;
  text-align: center;
  opacity: 0.3;
  animation: fadeIn 0.5s ease-out 2s both;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 0.3; }
  }
`;

const PowerOffScreen = () => {
  const { restart } = useWindowsStore();

  useEffect(() => {
    const handleKeyPress = (event) => {
      restart();
    };

    const handleClick = () => {
      restart();
    };

    const handleMouseMove = () => {
      restart();
    };

    // Add event listeners for any user interaction
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [restart]);

  return (
    <PowerOffContainer>
      <RestartMessage>
        Press any key or click to restart...
      </RestartMessage>
    </PowerOffContainer>
  );
};

export default PowerOffScreen;