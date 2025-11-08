import React from 'react';
import styled from 'styled-components';
import { DndContext, useDroppable } from '@dnd-kit/core';
import useWindowsStore from '../../store/windowsStore';
import DesktopIcon from '../shared/DesktopIcon';
import Window from './Window';
import theme from '../../styles/theme';

const DesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - ${theme.layout.taskbarHeight});
  background: transparent;
  overflow: hidden;
  z-index: 1;
`;

const DesktopGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0;
  padding: 20px;
`;

const Desktop = () => {
  const { windows, desktopIcons, openWindow, updateDesktopIconPosition } = useWindowsStore();

  const handleIconDoubleClick = (appId) => {
    console.log('Desktop: Opening window for appId:', appId); // Debug log
    openWindow(appId);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active && over && active.id !== over.id) {
      // Handle icon repositioning
      if (active.data.current?.type === 'desktop-icon') {
        const icon = active.data.current.icon;
        const newPosition = {
          x: event.delta.x + (icon.position?.x || 0),
          y: event.delta.y + (icon.position?.y || 0)
        };
        updateDesktopIconPosition(icon.id, newPosition);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <DesktopContainer>
        <DesktopGrid>
        {desktopIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            onDoubleClick={() => handleIconDoubleClick(icon.appId)}
          />
        ))}
        </DesktopGrid>
        
        {windows
          .filter(window => !window.isMinimized)
          .map(window => (
            <Window key={window.id} window={window} />
          ))}
      </DesktopContainer>
    </DndContext>
  );
};

export default Desktop;
