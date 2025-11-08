import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDraggable } from '@dnd-kit/core';
import theme from '../../styles/theme';

const selectAnimation = keyframes`
  0% { background-color: transparent; }
  100% { background-color: ${theme.colors.desktop.icon.selected}; }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: crosshair;
  user-select: none;
  position: relative;
  width: 100px;
  height: 100px;
  justify-content: flex-start;
  border: 3px solid transparent;
  transition: all ${theme.animations.fast};
  
  &:hover {
    background-color: ${theme.colors.desktop.icon.backgroundHover};
    border: 3px solid ${theme.colors.desktop.icon.border};
    transform: translate(-2px, -2px);
    box-shadow: ${theme.colors.desktop.icon.shadow};
  }
  
  &.selected {
    background-color: ${theme.colors.desktop.icon.selected};
    border: 3px solid ${theme.colors.desktop.icon.border};
    box-shadow: ${theme.colors.desktop.icon.shadow};
    animation: ${selectAnimation} 0.2s ease-in-out;
  }
`;

const IconImage = styled.img`
  width: ${theme.icons.desktop.small};
  height: ${theme.icons.desktop.small};
  margin-bottom: 6px;
  pointer-events: none;
  filter: drop-shadow(3px 3px 0px ${theme.colors.accents.neonGreen});
  transition: all ${theme.animations.fast};
  
  ${IconContainer}:hover & {
    filter: drop-shadow(4px 4px 0px ${theme.colors.accents.electricBlue});
    transform: scale(1.1);
  }
`;

const IconLabel = styled.span`
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.iconLabel};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.light};
  text-align: center;
  line-height: 1.2;
  text-shadow: 2px 2px 0px ${theme.colors.global.background}, 
               0 0 10px ${theme.colors.accents.neonGreen};
  pointer-events: none;
  word-wrap: break-word;
  max-width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;


const DesktopIcon = ({ icon, onDoubleClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: icon.id,
    data: {
      type: 'desktop-icon',
      icon
    }
  });

  const handleClick = (e) => {
    // simple single-click selection (keeps existing UX)
    e.preventDefault();
    e.stopPropagation();
    setIsSelected(true);
    // deselect after a short delay
    setTimeout(() => setIsSelected(false), 2000);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onDoubleClick === 'function') onDoubleClick();
  };

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <IconContainer
      ref={setNodeRef}
      style={style}
      className={isSelected ? 'selected' : ''}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      {...listeners}
      {...attributes}
    >
      <IconImage 
        src={icon.icon} 
        alt={icon.title}
        draggable={false}
      />
      <IconLabel style={{ cursor: 'pointer' }}>
        {icon.title}
      </IconLabel>
    </IconContainer>
  );
};

export default DesktopIcon;
