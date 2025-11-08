import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useWindowsStore from '../../store/windowsStore';
import StartButton from './StartButton';
import StartMenu from './StartMenu';
import TaskbarButton from './TaskbarButton';
import SystemTray from './SystemTray';
import theme from '../../styles/theme';

const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${theme.layout.taskbarHeight};
  background: ${theme.colors.taskbar.background.gradient.from};
  display: flex;
  align-items: center;
  z-index: 1000;
`;

const StartButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TaskbarButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 4px;
  height: 100%;
`;

const Taskbar = () => {
  const { 
    windows, 
    activeWindowId, 
    isStartMenuOpen, 
    toggleStartMenu,
    closeStartMenu,
    focusWindow,
    minimizeWindow
  } = useWindowsStore();

  const handleTaskbarButtonClick = (windowId) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;

    if (window.isMinimized) {
      // Restore window
      minimizeWindow(windowId);
      // Ensure restored window is focused
      focusWindow(windowId);
    } else if (activeWindowId === windowId) {
      // Minimize active window
      minimizeWindow(windowId);
    } else {
      // Focus window
      focusWindow(windowId);
    }
  };

  const handleStartButtonClick = (e) => {
    e.stopPropagation();
    toggleStartMenu();
  };

  const handleDesktopClick = () => {
    closeStartMenu();
  };

  return (
    <>
      <TaskbarContainer onClick={handleDesktopClick}>
        <StartButtonContainer>
          <StartButton onClick={handleStartButtonClick} />
        </StartButtonContainer>
        
        <TaskbarButtons>
          {windows
            // Show all windows in the taskbar (including minimized) so users can restore them
            .map(window => (
              <TaskbarButton
                key={window.id}
                window={window}
                isActive={activeWindowId === window.id}
                onClick={() => handleTaskbarButtonClick(window.id)}
              />
            ))}
        </TaskbarButtons>
        
        <SystemTray />
      </TaskbarContainer>
      
      {isStartMenuOpen && <StartMenu />}
    </>
  );
};

export default Taskbar;
