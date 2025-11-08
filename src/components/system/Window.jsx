import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';
import useWindowsStore from '../../store/windowsStore';
import theme from '../../styles/theme';

// Import content components
import EducationContent from '../apps/EducationContent';
import WorkExperienceContent from '../apps/WorkExperienceContent';
import TechnologiesContent from '../apps/TechnologiesContent';
import ProjectsContent from '../apps/ProjectsContent';
import AboutContent from '../apps/AboutContent';
import ArticlesContent from '../apps/ArticlesContent';
import ResearchContent from '../apps/ResearchContent';
import YouTubeContent from '../apps/YouTubeContent';
import MusicContent from '../apps/MusicContent';
import PongContent from '../apps/PongContent';
import ResumeContent from '../apps/ResumeContent';

const WindowContainer = styled.div`
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: ${props => props.size.width}px;
  height: ${props => props.size.height}px;
  z-index: ${props => props.zIndex};
  border: ${theme.layout.windowBorderWidth} solid ${props => 
    theme.colors.windowVariants[props.appId]?.border || theme.colors.window.border};
  background: ${theme.colors.window.body};
  box-shadow: ${props => 
    `${theme.layout.shadowOffset} ${theme.layout.shadowOffset} ${theme.layout.shadowBlur} ${
      theme.colors.windowVariants[props.appId]?.shadow || theme.colors.window.shadow}`};
  display: ${props => props.isMinimized ? 'none' : 'flex'};
  flex-direction: column;
  min-width: 250px;
  min-height: 200px;
  transition: all ${theme.animations.normal};
  transform-style: preserve-3d;
  
  &:hover {
    box-shadow: ${props => 
      `12px 12px ${theme.layout.shadowBlur} ${
        theme.colors.windowVariants[props.appId]?.shadow || theme.colors.window.shadowHover}`};
    transform: translate(-2px, -2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => 
      theme.colors.windowVariants[props.appId]?.border || theme.colors.window.border};
    z-index: -1;
    opacity: 0.1;
  }
`;

const TitleBar = styled.div`
  height: ${theme.layout.windowTitleHeight};
  background: ${props => props.isActive 
    ? (theme.colors.windowVariants[props.appId]?.titleBar || theme.colors.window.activeTitleBar.gradient.from)
    : theme.colors.window.inactiveTitleBar.gradient.from
  };
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: move;
  user-select: none;
  border-bottom: 4px solid ${props => 
    theme.colors.windowVariants[props.appId]?.border || theme.colors.window.border};
  font-family: ${theme.typography.fonts.display};
  font-weight: ${theme.typography.weights.black};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all ${theme.animations.fast};
  
  &:hover {
    background: ${props => 
      theme.colors.windowVariants[props.appId]?.titleBar || theme.colors.accents.neonGreen};
    color: ${theme.colors.global.background};
    text-shadow: 2px 2px 0px ${theme.colors.global.background};
  }
`;

const TitleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  filter: drop-shadow(2px 2px 0px ${theme.colors.global.background});
`;

const TitleText = styled.span`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.windowTitle};
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.text.primary};
  flex: 1;
  text-shadow: 2px 2px 0px ${theme.colors.global.background};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 2px;
`;

const ControlButton = styled.button`
  width: 32px;
  height: 32px;
  border: 3px solid ${theme.colors.global.background};
  background: ${theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.typography.fonts.display};
  font-size: 16px;
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.global.background};
  margin-left: 4px;
  transition: all ${theme.animations.fast};
  box-shadow: 3px 3px 0px ${theme.colors.global.background};
  
  &:hover {
    background: ${theme.colors.accents.hotPink};
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.global.background};
  }
  
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px ${theme.colors.global.background};
  }

  /* Individual button colors */
  &.minimize {
    background: ${theme.colors.accents.cyberYellow};
    &:hover { background: ${theme.colors.accents.acidOrange}; }
  }
  
  &.maximize {
    background: ${theme.colors.accents.electricBlue};
    &:hover { background: ${theme.colors.accents.toxicPurple}; }
  }
  
  &.close {
    background: ${theme.colors.accents.laserRed};
    &:hover { background: ${theme.colors.accents.hotPink}; }
  }
`;

const WindowContent = styled.div`
  flex: 1;
  overflow: auto;
  background: ${theme.colors.window.body};
`;

const ResizeHandle = styled.div`
  position: absolute;
  background: transparent;
  
  &.nw { top: -2px; left: -2px; width: 8px; height: 8px; cursor: nw-resize; }
  &.n { top: -2px; left: 0; right: 0; height: 4px; cursor: n-resize; }
  &.ne { top: -2px; right: -2px; width: 8px; height: 8px; cursor: ne-resize; }
  &.e { top: 0; right: -2px; width: 4px; bottom: 0; cursor: e-resize; }
  &.se { bottom: -2px; right: -2px; width: 8px; height: 8px; cursor: se-resize; }
  &.s { bottom: -2px; left: 0; right: 0; height: 4px; cursor: s-resize; }
  &.sw { bottom: -2px; left: -2px; width: 8px; height: 8px; cursor: sw-resize; }
  &.w { top: 0; left: -2px; width: 4px; bottom: 0; cursor: w-resize; }
`;

const Window = ({ window }) => {
  const {
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow,
    updateWindowPosition,
    updateWindowSize
  } = useWindowsStore();

  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef(null);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: window.id,
    data: {
      type: 'window',
      window
    }
  });

  const isActive = useWindowsStore(state => state.activeWindowId === window.id);

  const handleTitleBarClick = () => {
    focusWindow(window.id);
  };

  const handleResizeStart = (e, direction) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: window.size.width,
      height: window.size.height
    });
  };

  const handleResizeMove = (e) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;
    
    let newWidth = resizeStart.width;
    let newHeight = resizeStart.height;
    
    // Handle different resize directions
    if (e.target.classList.contains('se') || e.target.classList.contains('e') || e.target.classList.contains('s')) {
      newWidth = Math.max(200, resizeStart.width + deltaX);
      newHeight = Math.max(150, resizeStart.height + deltaY);
    }
    
    updateWindowSize(window.id, { width: newWidth, height: newHeight });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [isResizing, resizeStart]);

  const renderContent = () => {
    const contentComponents = {
      education: EducationContent,
      workExperience: WorkExperienceContent,
      technologies: TechnologiesContent,
      projects: ProjectsContent,
      about: AboutContent,
      articles: ArticlesContent,
      research: ResearchContent,
      youtube: YouTubeContent,
      pong: PongContent,
      music: MusicContent,
      resume: ResumeContent
    };
    
    const ContentComponent = contentComponents[window.appId];
    // Debug: log which appId is being rendered and whether a component was found
    try {
      // eslint-disable-next-line no-console
      console.debug('Window: renderContent for appId =', window.appId, 'componentFound =', !!ContentComponent);
    } catch (e) {
      // ignore logging errors in environments without console
    }
    return ContentComponent ? <ContentComponent /> : <div>Content not found</div>;
  };

  // Track viewport size to compute maximize dimensions
  const [viewport, setViewport] = useState({ width: typeof globalThis !== 'undefined' && globalThis.window ? globalThis.window.innerWidth : 1024, height: typeof globalThis !== 'undefined' && globalThis.window ? globalThis.window.innerHeight : 768 });

  useEffect(() => {
    const handleResize = () => setViewport({ width: globalThis.window.innerWidth, height: globalThis.window.innerHeight });
    if (typeof globalThis !== 'undefined' && globalThis.window) {
      globalThis.window.addEventListener('resize', handleResize);
      return () => globalThis.window.removeEventListener('resize', handleResize);
    }
    return undefined;
  }, []);

  // Compute effective position/size when maximized
  const effectivePosition = window.isMaximized ? { x: 0, y: 0 } : window.position;
  const taskbarHeight = parseInt(theme.layout.taskbarHeight, 10) || 40;
  const effectiveSize = window.isMaximized ? { width: viewport.width, height: Math.max(100, viewport.height - taskbarHeight) } : window.size;

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <WindowContainer
      ref={setNodeRef}
      style={style}
      position={effectivePosition}
      size={effectiveSize}
      zIndex={window.zIndex}
      isMinimized={window.isMinimized}
      isActive={isActive}
      appId={window.appId}
    >
        <TitleBar
        isActive={isActive}
        appId={window.appId}
        onClick={handleTitleBarClick}
        {...listeners}
        {...attributes}
      >
        <TitleIcon src={window.icon} alt={window.title} />
        <TitleText>{window.title}</TitleText>
        <WindowControls>
          <ControlButton 
            className="minimize"
            onPointerDown={(e) => e.stopPropagation()} 
            onClick={() => minimizeWindow(window.id)}
          >
            ─
          </ControlButton>
          <ControlButton 
            className="maximize"
            onPointerDown={(e) => e.stopPropagation()} 
            onClick={() => toggleMaximizeWindow(window.id)}
          >
            ▢
          </ControlButton>
          <ControlButton 
            className="close"
            onPointerDown={(e) => e.stopPropagation()} 
            onClick={() => closeWindow(window.id)}
          >
            ✕
          </ControlButton>
        </WindowControls>
      </TitleBar>      <WindowContent>
        {renderContent()}
      </WindowContent>
      
      {/* Resize handles */}
      <ResizeHandle className="nw" onMouseDown={(e) => handleResizeStart(e, 'nw')} />
      <ResizeHandle className="n" onMouseDown={(e) => handleResizeStart(e, 'n')} />
      <ResizeHandle className="ne" onMouseDown={(e) => handleResizeStart(e, 'ne')} />
      <ResizeHandle className="e" onMouseDown={(e) => handleResizeStart(e, 'e')} />
      <ResizeHandle className="se" onMouseDown={(e) => handleResizeStart(e, 'se')} />
      <ResizeHandle className="s" onMouseDown={(e) => handleResizeStart(e, 's')} />
      <ResizeHandle className="sw" onMouseDown={(e) => handleResizeStart(e, 'sw')} />
      <ResizeHandle className="w" onMouseDown={(e) => handleResizeStart(e, 'w')} />
    </WindowContainer>
  );
};

export default Window;
