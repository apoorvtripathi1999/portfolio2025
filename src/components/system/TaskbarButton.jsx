import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ButtonContainer = styled.button`
  height: 36px;
  min-width: 140px;
  max-width: 220px;
  background: ${props => props.isActive 
    ? theme.colors.accents.electricBlue
    : theme.colors.global.surfaceElevated
  };
  border: 3px solid ${props => props.isActive 
    ? theme.colors.accents.neonGreen 
    : theme.colors.accents.electricBlue
  };
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.taskbarButton};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  user-select: none;
  margin: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all ${theme.animations.fast};
  box-shadow: ${props => props.isActive 
    ? `4px 4px 0px ${theme.colors.accents.neonGreen}`
    : `3px 3px 0px ${theme.colors.accents.electricBlue}`
  };
  
  &:hover {
    background: ${props => props.isActive 
      ? theme.colors.accents.hotPink
      : theme.colors.accents.neonGreen
    };
    transform: translate(-2px, -2px);
    box-shadow: ${props => props.isActive 
      ? `6px 6px 0px ${theme.colors.accents.cyberYellow}`
      : `5px 5px 0px ${theme.colors.accents.hotPink}`
    };
    text-shadow: 0 0 10px ${theme.colors.global.background};
  }
  
  &:active {
    transform: translate(1px, 1px);
    box-shadow: ${props => props.isActive 
      ? `2px 2px 0px ${theme.colors.accents.neonGreen}`
      : `2px 2px 0px ${theme.colors.accents.electricBlue}`
    };
  }
  
  &:focus {
    outline: 3px solid ${theme.colors.accents.cyberYellow};
    outline-offset: 2px;
  }
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  flex-shrink: 0;
  filter: drop-shadow(2px 2px 0px ${theme.colors.global.background});
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 1px 1px 0px ${theme.colors.global.background};
`;

const TaskbarButton = ({ window, isActive, onClick }) => {
  return (
    <ButtonContainer isActive={isActive} onClick={onClick}>
      <ButtonIcon src={window.icon} alt={window.title} />
      <ButtonText>{window.title}</ButtonText>
    </ButtonContainer>
  );
};

export default TaskbarButton;
