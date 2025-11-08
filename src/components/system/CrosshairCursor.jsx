import React from 'react';
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
    ${theme.colors.accents.neonGreen}${props => props.isMoving ? '60' : '30'} 8px,
    ${theme.colors.accents.neonGreen}${props => props.isMoving ? '60' : '30'} 16px
  );
  transform: translateY(${props => props.y}px);
  transition: all 0.2s ease;
  opacity: ${props => props.isMoving ? 0.8 : 0.4};
  box-shadow: 0 0 ${props => props.isMoving ? '6px' : '2px'} ${theme.colors.accents.neonGreen}40;
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
    ${theme.colors.accents.electricBlue}${props => props.isMoving ? '60' : '30'} 8px,
    ${theme.colors.accents.electricBlue}${props => props.isMoving ? '60' : '30'} 16px
  );
  transform: translateX(${props => props.x}px);
  transition: all 0.2s ease;
  opacity: ${props => props.isMoving ? 0.8 : 0.4};
  box-shadow: 0 0 ${props => props.isMoving ? '6px' : '2px'} ${theme.colors.accents.electricBlue}40;
`;

const CoordinateDisplay = styled.div`
  position: absolute;
  background: ${theme.colors.global.background}E6;
  border: 2px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 3px 3px 0px ${theme.colors.accents.cyberYellow}60;
  padding: 4px 8px;
  font-family: ${theme.typography.fonts.mono};
  font-size: 10px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.cyberYellow};
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: all 0.1s ease;
  opacity: ${props => props.isMoving ? 1 : 0.7};
  backdrop-filter: blur(4px);
  
  ${props => {
    const isNearRightEdge = props.x > window.innerWidth - 150;
    const isNearTopEdge = props.y < 35;
    
    let translateX = props.x + 15;
    let translateY = props.y - 25;
    
    if (isNearRightEdge) {
      translateX = props.x - 100;
    }
    
    if (isNearTopEdge) {
      translateY = props.y + 15;
    }
    
    return `transform: translate(${translateX}px, ${translateY}px);`;
  }}
`;

const CenterDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${theme.colors.accents.hotPink};
  border: 1px solid ${theme.colors.accents.cyberYellow};
  border-radius: 50%;
  transform: translate(${props => props.x - 3}px, ${props => props.y - 3}px);
  box-shadow: 
    0 0 8px ${theme.colors.accents.hotPink},
    0 0 16px ${theme.colors.accents.hotPink}40;
  opacity: ${props => props.isMoving ? 1 : 0.8};
  transition: all 0.1s ease;
`;

const CrosshairCursor = () => {
  const { x, y, isMoving } = useMousePosition();

  return (
    <CrosshairContainer>
      {/* Horizontal dotted line */}
      <HorizontalLine y={y} isMoving={isMoving} />
      
      {/* Vertical dotted line */}
      <VerticalLine x={x} isMoving={isMoving} />
      
      {/* Center intersection dot */}
      <CenterDot x={x} y={y} isMoving={isMoving} />
      
      {/* Coordinate display */}
      <CoordinateDisplay x={x} y={y} isMoving={isMoving}>
        LEN:{x}px WID:{y}px
      </CoordinateDisplay>
    </CrosshairContainer>
  );
};

export default CrosshairCursor;