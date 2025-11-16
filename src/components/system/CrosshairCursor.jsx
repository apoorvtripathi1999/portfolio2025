import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useMousePosition from '../../hooks/useMousePosition';
import theme from '../../styles/theme';

const CrosshairContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    transparent,
    transparent 8px,
    ${theme.colors.accents.neonGreen}50 8px,
    ${theme.colors.accents.neonGreen}50 16px
  );
  will-change: transform;
  opacity: 0.6;
  box-shadow: 0 0 4px ${theme.colors.accents.neonGreen}40;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 100vh;
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 8px,
    ${theme.colors.accents.electricBlue}50 8px,
    ${theme.colors.accents.electricBlue}50 16px
  );
  will-change: transform;
  opacity: 0.6;
  box-shadow: 0 0 4px ${theme.colors.accents.electricBlue}40;
`;

const CoordinateDisplay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${theme.colors.global.background}F0;
  border: 2px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 3px 3px 0px ${theme.colors.accents.cyberYellow}60;
  padding: 4px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.accents.cyberYellow};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  opacity: 0.95;
  will-change: transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
  transform-origin: top left;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: ${theme.colors.accents.hotPink};
  border: 1px solid ${theme.colors.accents.cyberYellow};
  border-radius: 50%;
  will-change: transform;
  box-shadow: 
    0 0 8px ${theme.colors.accents.hotPink},
    0 0 16px ${theme.colors.accents.hotPink}40;
  opacity: 0.9;
`;

const CrosshairCursor = () => {
  const { x, y } = useMousePosition();
  const horizontalRef = useRef(null);
  const verticalRef = useRef(null);
  const dotRef = useRef(null);
  const coordRef = useRef(null);

  useEffect(() => {
    if (horizontalRef.current) {
      horizontalRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
    }
    if (verticalRef.current) {
      verticalRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    }
    if (coordRef.current) {
      const isNearRightEdge = x > window.innerWidth - 150;
      const isNearTopEdge = y < 35;
      
      let translateX = x + 15;
      let translateY = y - 25;
      
      if (isNearRightEdge) {
        translateX = x - 100;
      }
      
      if (isNearTopEdge) {
        translateY = y + 15;
      }
      
      coordRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
  }, [x, y]);

  return (
    <CrosshairContainer>
      {/* Horizontal dotted line */}
      <HorizontalLine ref={horizontalRef} />
      
      {/* Vertical dotted line */}
      <VerticalLine ref={verticalRef} />
      
      {/* Center intersection dot */}
      <CenterDot ref={dotRef} />
      
      {/* Coordinate display */}
      <CoordinateDisplay ref={coordRef}>
        LEN:{x}px WID:{y}px
      </CoordinateDisplay>
    </CrosshairContainer>
  );
};

export default CrosshairCursor;