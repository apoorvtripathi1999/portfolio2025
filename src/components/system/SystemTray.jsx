import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const SystemTrayContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
`;

const TrayIcon = styled.div`
  width: 32px;
  height: 24px;
  background: ${theme.colors.accents.electricBlue};
  border: 3px solid ${theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${theme.colors.global.background};
  cursor: pointer;
  transition: all ${theme.animations.fast};
  box-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  font-weight: ${theme.typography.weights.bold};
  
  &:hover {
    background: ${theme.colors.accents.neonGreen};
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px ${theme.colors.global.shadow};
    border-color: ${theme.colors.accents.hotPink};
  }
  
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  }
`;

const ClockContainer = styled.div`
  height: 32px;
  padding: 0 16px;
  background: ${theme.colors.accents.hotPink};
  border: 3px solid ${theme.colors.text.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.clock};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.global.background};
  user-select: none;
  transition: all ${theme.animations.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  text-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  
  &:hover {
    background: ${theme.colors.accents.neonGreen};
    border-color: ${theme.colors.accents.electricBlue};
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px ${theme.colors.global.shadow};
  }
  
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px ${theme.colors.global.shadow};
    background: ${theme.colors.accents.electricBlue};
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 40px;
  right: 12px;
  background: ${theme.colors.accents.neonGreen};
  border: 3px solid ${theme.colors.text.primary};
  padding: 12px 16px;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.clock};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.global.background};
  white-space: nowrap;
  z-index: 1001;
  box-shadow: 6px 6px 0px ${theme.colors.global.shadow};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  animation: tooltipPulse 2s ease-in-out infinite;
  
  @keyframes tooltipPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 8px solid transparent;
    border-top-color: ${theme.colors.text.primary};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: calc(100% + 3px);
    right: 23px;
    border: 5px solid transparent;
    border-top-color: ${theme.colors.accents.neonGreen};
  }
`;

const SystemTray = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClockClick = () => {
    setShowTooltip(!showTooltip);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <SystemTrayContainer>
      <TrayIcon title="Battery: 100%">⚡</TrayIcon>
      
      <ClockContainer
        onClick={handleClockClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={handleMouseLeave}
        title={formatDate(currentTime)}
      >
        {formatTime(currentTime)}
      </ClockContainer>
      
      {showTooltip && (
        <Tooltip>
          {formatDate(currentTime)}
        </Tooltip>
      )}
    </SystemTrayContainer>
  );
};

export default SystemTray;
