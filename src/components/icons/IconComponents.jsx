// Example: Modern SVG icon component for your project
import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const IconContainer = styled.div`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  
  svg {
    width: 100%;
    height: 100%;
    transition: all ${theme.animations.fast};
    
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(2px 2px 0px ${theme.colors.global.shadow});
    }
  }
`;

// Resume Icon Component
export const ResumeIcon = ({ size, color = '#FF6B35' }) => (
  <IconContainer size={size}>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill={color} rx="4"/>
      <rect x="6" y="4" width="20" height="24" fill="#FFFFFF" stroke="#333" strokeWidth="2"/>
      <rect x="8" y="6" width="16" height="2" fill={color}/>
      <rect x="8" y="10" width="12" height="1" fill="#666"/>
      <rect x="8" y="12" width="14" height="1" fill="#666"/>
      <rect x="8" y="14" width="10" height="1" fill="#666"/>
      <rect x="8" y="17" width="16" height="1" fill={color}/>
      <rect x="8" y="19" width="13" height="1" fill="#666"/>
      <rect x="8" y="21" width="11" height="1" fill="#666"/>
      <circle cx="24" cy="8" r="2" fill={color}/>
    </svg>
  </IconContainer>
);

// Pong Icon Component  
export const PongIcon = ({ size, color = '#FF0055' }) => (
  <IconContainer size={size}>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill={color} rx="4"/>
      <rect x="2" y="4" width="28" height="24" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
      <rect x="4" y="10" width="2" height="12" fill="#00FFFF"/>
      <rect x="26" y="10" width="2" height="12" fill="#00FFFF"/>
      <circle cx="16" cy="16" r="2" fill="#FFFFFF"/>
      <line x1="16" y1="6" x2="16" y2="26" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2,2"/>
    </svg>
  </IconContainer>
);

// Usage in your components
// <ResumeIcon size="48px" />
// <PongIcon size="32px" color="#00FF41" />