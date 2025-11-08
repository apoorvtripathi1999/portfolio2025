import React from 'react';
import styled from 'styled-components';
import useWindowsStore from '../../store/windowsStore';
import theme from '../../styles/theme';

const StartMenuContainer = styled.div`
  position: fixed;
  bottom: ${theme.layout.taskbarHeight};
  left: 0;
  width: 480px;
  height: 600px;
  background: ${theme.colors.global.surface};
  border: 5px solid ${theme.colors.accents.electricBlue};
  box-shadow: 12px 12px 0px ${theme.colors.accents.neonGreen};
  display: flex;
  z-index: 999;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${theme.colors.accents.neonGreen}, 
      ${theme.colors.accents.electricBlue}, 
      ${theme.colors.accents.hotPink}, 
      ${theme.colors.accents.cyberYellow});
    z-index: -1;
    opacity: 0.1;
  }
`;

const LeftColumn = styled.div`
  width: 240px;
  background: ${theme.colors.global.surfaceElevated};
  border-right: 4px solid ${theme.colors.accents.electricBlue};
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  width: 240px;
  background: ${theme.colors.global.surface};
  display: flex;
  flex-direction: column;
`;

const UserHeader = styled.div`
  height: 80px;
  background: ${theme.colors.accents.hotPink};
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.userHeader};
  font-weight: ${theme.typography.weights.black};
  text-shadow: 3px 3px 0px ${theme.colors.global.background};
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 4px solid ${theme.colors.accents.neonGreen};
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #CCCCCC;
  border: 2px solid #FFFFFF;
  border-radius: 2px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666666;
`;

const UserName = styled.div`
  flex: 1;
`;

const PinnedList = styled.div`
  flex: 1;
  padding: 8px 0;
`;

const MenuItem = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.menuItem};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  border: 2px solid transparent;
  margin: 2px;
  transition: all ${theme.animations.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: ${theme.colors.accents.neonGreen};
    color: ${theme.colors.global.background};
    border: 2px solid ${theme.colors.accents.electricBlue};
    transform: translate(-2px, 0);
    box-shadow: 4px 0 0px ${theme.colors.accents.electricBlue};
    text-shadow: 2px 2px 0px ${theme.colors.global.background};
  }
`;

const MenuIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const SystemLinks = styled.div`
  flex: 1;
  padding: 8px 0;
`;

const SystemItem = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.menuItem};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  border: 2px solid transparent;
  margin: 2px;
  transition: all ${theme.animations.fast};
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: ${theme.colors.accents.electricBlue};
    color: ${theme.colors.global.background};
    border: 2px solid ${theme.colors.accents.neonGreen};
    transform: translate(-2px, 0);
    box-shadow: 4px 0 0px ${theme.colors.accents.neonGreen};
    text-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  }
`;

const SystemControls = styled.div`
  border-top: 1px solid #C0C0C0;
  padding: 4px 0;
`;

const ControlButton = styled.button`
  width: 100%;
  height: 24px;
  background: #F0F0F0;
  border: 1px solid #C0C0C0;
  border-bottom: 1px solid #808080;
  border-right: 1px solid #808080;
  cursor: pointer;
  font-family: ${theme.typography.fonts.tahoma};
  font-size: ${theme.typography.sizes.menuItem};
  color: #000000;
  text-align: left;
  padding: 0 8px;
  
  &:hover {
    background: #E0E0E0;
  }
  
  &:active {
    background: #D0D0D0;
    border: 1px solid #808080;
    border-bottom: 1px solid #C0C0C0;
    border-right: 1px solid #C0C0C0;
  }
`;

const StartMenu = () => {
  const { openWindow, closeStartMenu, logOff, powerOff } = useWindowsStore();

  const portfolioItems = [
    { appId: 'education', title: 'Education', icon: '/src/assets/icons/education.svg' },
    { appId: 'workExperience', title: 'Work Experience', icon: '/src/assets/icons/briefcase.svg' },
    { appId: 'technologies', title: 'Technologies', icon: '/src/assets/icons/computer.svg' },
    { appId: 'projects', title: 'Projects', icon: '/src/assets/icons/folder.svg' },
    { appId: 'about', title: 'About Me', icon: '/src/assets/icons/user.svg' },
    { appId: 'articles', title: 'Articles', icon: '/src/assets/icons/document.svg' },
    { appId: 'research', title: 'Research', icon: '/src/assets/icons/research.svg' },
    { appId: 'youtube', title: 'YouTube Channel', icon: '/src/assets/icons/youtube.svg' },
    { appId: 'resume', title: 'Resume', icon: '/src/assets/icons/resume.svg' },
    { appId: 'pong', title: 'Pong', icon: '/src/assets/icons/pong.svg' },
    { appId: 'music', title: 'Music', icon: '/src/assets/icons/music.svg' }
  ];

  const systemItems = [
    { title: 'My LinkedIn', action: () => window.open('https://linkedin.com', '_blank') },
    { title: 'My Instagram', action: () => window.open('https://instagram.com', '_blank') },
    { title: 'My HackerRank', action: () => window.open('https://hackerrank.com', '_blank') },
    { title: 'My LeetCode', action: () => window.open('https://leetcode.com', '_blank') },
    { title: 'My GitHub', action: () => window.open('https://github.com', '_blank') },
    { title: 'My Discord', action: () => window.open('https://discord.com', '_blank') }
  ];

  const handleItemClick = (appId) => {
    openWindow(appId);
    closeStartMenu();
  };

  return (
    <StartMenuContainer>
      <LeftColumn>
        <UserHeader>
          <UserAvatar>👤</UserAvatar>
          <UserName>Portfolio User</UserName>
        </UserHeader>
        
        <PinnedList>
          {portfolioItems.map(item => (
            <MenuItem key={item.appId} onClick={() => handleItemClick(item.appId)}>
              <MenuIcon src={item.icon} alt={item.title} />
              {item.title}
            </MenuItem>
          ))}
        </PinnedList>
      </LeftColumn>
      
      <RightColumn>
        <SystemLinks>
          {systemItems.map((item, index) => (
            <SystemItem key={index} onClick={item.action}>
              {item.title}
            </SystemItem>
          ))}
        </SystemLinks>
        
        <SystemControls>
          <ControlButton onClick={() => { closeStartMenu(); logOff(); }}>Log Off</ControlButton>
          <ControlButton onClick={() => { closeStartMenu(); powerOff(); }}>Turn Off Computer</ControlButton>
        </SystemControls>
      </RightColumn>
    </StartMenuContainer>
  );
};

export default StartMenu;
