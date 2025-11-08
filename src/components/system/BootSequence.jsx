import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
`;

const terminalGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.4),
                0 0 40px rgba(0, 191, 255, 0.2),
                inset 0 0 20px rgba(138, 43, 226, 0.1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.6),
                0 0 60px rgba(0, 191, 255, 0.3),
                inset 0 0 30px rgba(138, 43, 226, 0.15);
  }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(500px); opacity: 0; }
`;

const blink = keyframes`
  0%, 50% { 
    border-color: #00BFFF; 
    box-shadow: 0 0 5px #00BFFF;
  }
  51%, 100% { 
    border-color: transparent; 
    box-shadow: none;
  }
`;

const progressBar = keyframes`
  0% { width: 0%; }
  25% { width: 20%; }
  50% { width: 45%; }
  75% { width: 70%; }
  90% { width: 85%; }
  100% { width: 100%; }
`;

const matrixRain = keyframes`
  0% { transform: translateY(-100vh); }
  100% { transform: translateY(100vh); }
`;

const BootContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0D1117 0%, #161B22 50%, #21262D 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  animation: ${props => props.fadeOut ? fadeOut : fadeIn} 0.8s ease-in-out;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00BFFF, transparent);
    animation: ${scanline} 3s linear infinite;
  }
`;

const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  overflow: hidden;
  
  &::before {
    content: '01010101010101010101010101010101010101010101';
    position: absolute;
    top: -100vh;
    left: 10%;
    color: #8A2BE2;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    animation: ${matrixRain} 10s linear infinite;
  }
  
  &::after {
    content: '11001100110011001100110011001100110011001100';
    position: absolute;
    top: -100vh;
    right: 10%;
    color: #00BFFF;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    animation: ${matrixRain} 8s linear infinite 2s;
  }
`;

const TerminalContainer = styled.div`
  background: rgba(13, 17, 23, 0.95);
  border: 2px solid #8A2BE2;
  border-radius: 8px;
  padding: 30px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  color: #C9D1D9;
  max-width: 700px;
  width: 90%;
  position: relative;
  backdrop-filter: blur(10px);
  animation: ${terminalGlow} 4s ease-in-out infinite;
  
  &::before {
    content: '● ● ●';
    position: absolute;
    top: -15px;
    left: 20px;
    background: rgba(13, 17, 23, 0.9);
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
    color: #8A2BE2;
    border: 1px solid #8A2BE2;
  }
  
  &::after {
    content: 'portfolio-terminal';
    position: absolute;
    top: -15px;
    right: 20px;
    background: rgba(13, 17, 23, 0.9);
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 10px;
    color: #00BFFF;
    border: 1px solid #00BFFF;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const TerminalText = styled.div`
  font-size: 16px;
  line-height: 1.8;
  white-space: pre-line;
  margin-bottom: 20px;
  min-height: 200px;
  font-weight: 400;
  letter-spacing: 0.5px;
  
  .success {
    color: #7C3AED;
    text-shadow: 0 0 5px rgba(124, 58, 237, 0.5);
  }
  
  .info {
    color: #00BFFF;
    text-shadow: 0 0 5px rgba(0, 191, 255, 0.3);
  }
  
  .highlight {
    color: #FBBF24;
    font-weight: 600;
    text-shadow: 0 0 5px rgba(251, 191, 36, 0.4);
  }
`;

const Cursor = styled.span`
  border-right: 3px solid #00BFFF;
  animation: ${blink} 1s infinite;
  margin-left: 2px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProgressLabel = styled.div`
  color: #8A2BE2;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(138, 43, 226, 0.2);
  border: 1px solid #8A2BE2;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #8A2BE2, #00BFFF, #7C3AED);
  border-radius: 3px;
  animation: ${progressBar} 4s ease-out forwards;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: ${scanline} 2s linear infinite;
  }
`;

const BootSequence = ({ onBootComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const bootLines = [
    { text: '$ ssh user@portfolio-server.dev', class: 'info' },
    { text: 'Establishing secure SSH tunnel... ', class: 'default' },
    { text: '✓ Connection authenticated', class: 'success' },
    { text: 'Loading environment variables...', class: 'info' },
    { text: '✓ Portfolio workspace initialized successfully', class: 'highlight' }
  ];

  useEffect(() => {
    if (currentLineIndex >= bootLines.length) {
      setIsTyping(false);
      const bootTimer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onBootComplete();
        }, 800);
      }, 800);
      return () => clearTimeout(bootTimer);
    }

    if (isTyping && currentLineIndex < bootLines.length) {
      const currentLine = bootLines[currentLineIndex];
      let charIndex = 0;
      
      // Calculate timing to complete in 4 seconds total
      const totalTime = 4000; // 4 seconds
      const totalCharacters = bootLines.reduce((acc, line) => acc + line.text.length, 0);
      const typingSpeed = totalTime / totalCharacters;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentLine.text.length) {
          const char = currentLine.text[charIndex];
          const className = currentLine.class !== 'default' ? currentLine.class : '';
          
          if (charIndex === 0 && className) {
            setDisplayedText(prev => prev + `<span class="${className}">`);
          }
          
          setDisplayedText(prev => prev + char);
          charIndex++;
          
          if (charIndex === currentLine.text.length && className) {
            setDisplayedText(prev => prev + '</span>');
          }
        } else {
          clearInterval(typeInterval);
          // Short pause between lines
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setDisplayedText(prev => prev + '\n');
          }, 200);
        }
      }, Math.max(30, typingSpeed)); // Minimum 30ms for smooth typing

      return () => clearInterval(typeInterval);
    }
  }, [currentLineIndex, isTyping, onBootComplete]);

  return (
    <BootContainer fadeOut={fadeOut}>
      <MatrixBackground />
      <TerminalContainer>
        <TerminalText>
          <div dangerouslySetInnerHTML={{ __html: displayedText }} />
          {isTyping && <Cursor />}
        </TerminalText>
        <ProgressContainer>
          <ProgressLabel>Initializing Connection</ProgressLabel>
          <ProgressBarContainer>
            <ProgressBarFill />
          </ProgressBarContainer>
        </ProgressContainer>
      </TerminalContainer>
    </BootContainer>
  );
};

export default BootSequence;
