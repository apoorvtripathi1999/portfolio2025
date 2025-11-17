import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import useWindowsStore from '../../store/windowsStore';
import MobileApp from './MobileApp';

const MobileContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.colors.global.background};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StatusBar = styled.div`
  height: 32px;
  background: ${theme.colors.global.background};
  border-bottom: 2px solid ${theme.colors.accents.neonGreen};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  font-family: ${theme.typography.fonts.mono};
  font-size: 11px;
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.weights.bold};
`;

const StatusLeft = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StatusRight = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Signal = styled.div`
  color: ${theme.colors.accents.neonGreen};
`;

const Battery = styled.div`
  color: ${theme.colors.accents.electricBlue};
`;

const Time = styled.div`
  color: ${theme.colors.accents.cyberYellow};
`;

const UserHeader = styled.div`
  padding: 20px 16px;
  background: ${theme.colors.global.surfaceElevated};
  border-bottom: 3px solid ${theme.colors.accents.neonGreen};
`;

const UserName = styled.h1`
  font-family: ${theme.typography.fonts.display};
  font-size: 28px;
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.accents.neonGreen};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 3px 3px 0px ${theme.colors.accents.electricBlue};
  margin: 0;
`;

const TilesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: ${theme.colors.global.background};
`;

const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding-bottom: 80px;
`;

const Tile = styled.div`
  aspect-ratio: 1;
  background: ${props => props.bgColor || theme.colors.accents.neonGreen};
  border: 3px solid ${props => props.bgColor || theme.colors.accents.neonGreen};
  box-shadow: 4px 4px 0px ${props => props.bgColor || theme.colors.accents.neonGreen};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 16px;
  cursor: pointer;
  transition: ${theme.animations.fast};
  position: relative;
  overflow: hidden;
  
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px ${props => props.bgColor || theme.colors.accents.neonGreen};
  }
  
  &.wide {
    grid-column: span 2;
    aspect-ratio: 2/1;
  }
`;

const TileIcon = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0.9;
`;

const TileTitle = styled.div`
  font-family: ${theme.typography.fonts.display};
  font-size: 14px;
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.global.background};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const NavBar = styled.div`
  height: 64px;
  background: ${theme.colors.global.surfaceElevated};
  border-top: 3px solid ${theme.colors.accents.electricBlue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${props => props.active ? theme.colors.accents.hotPink : 'transparent'};
  border: 2px solid ${props => props.active ? theme.colors.accents.hotPink : theme.colors.accents.electricBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${theme.colors.text.primary};
  border-radius: 2px;
  transition: ${theme.animations.fast};
  
  &:active {
    transform: scale(0.95);
  }
`;

const MobileHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openApp, setOpenApp] = useState(null);
  const { logOff, powerOff } = useWindowsStore();

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'education', title: 'Education', icon: '/src/assets/icons/education.svg', color: theme.colors.accents.neonGreen },
    { id: 'workExperience', title: 'Work', icon: '/src/assets/icons/briefcase.svg', color: theme.colors.accents.electricBlue },
    { id: 'technologies', title: 'Tech', icon: '/src/assets/icons/computer.svg', color: theme.colors.accents.hotPink },
    { id: 'projects', title: 'Projects', icon: '/src/assets/icons/folder.svg', color: theme.colors.accents.cyberYellow, wide: true },
    { id: 'about', title: 'About Me', icon: '/src/assets/icons/user.svg', color: theme.colors.accents.acidOrange },
    { id: 'articles', title: 'Articles', icon: '/src/assets/icons/document.svg', color: theme.colors.accents.toxicPurple },
    { id: 'research', title: 'Research', icon: '/src/assets/icons/research.svg', color: theme.colors.accents.laserRed },
    { id: 'youtube', title: 'YouTube', icon: '/src/assets/icons/youtube.svg', color: theme.colors.accents.hotPink },
    { id: 'resume', title: 'Resume', icon: '/src/assets/icons/resume.svg', color: '#FF6B35' },
    { id: 'pong', title: 'Pong', icon: '/src/assets/icons/pong.svg', color: '#00FFFF' },
    { id: 'music', title: 'Music', icon: '/src/assets/icons/music.svg', color: '#FF9900', wide: true },
  ];

  if (openApp) {
    return <MobileApp appId={openApp} onClose={() => setOpenApp(null)} />;
  }

  return (
    <MobileContainer>
      <StatusBar>
        <StatusLeft>
          <Signal>◆◆◆◆</Signal>
          <div>5G</div>
        </StatusLeft>
        <StatusRight>
          <Battery>⚡ 100%</Battery>
          <Time>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Time>
        </StatusRight>
      </StatusBar>

      <UserHeader>
        <UserName>Apoorv Tripathi</UserName>
      </UserHeader>

      <TilesContainer>
        <TilesGrid>
          {apps.map(app => (
            <Tile
              key={app.id}
              bgColor={app.color}
              className={app.wide ? 'wide' : ''}
              onClick={() => setOpenApp(app.id)}
            >
              <TileIcon src={app.icon} alt={app.title} />
              <TileTitle>{app.title}</TileTitle>
            </Tile>
          ))}
        </TilesGrid>
      </TilesContainer>

      <NavBar>
        <NavButton onClick={() => window.history.back()}>◀</NavButton>
        <NavButton active onClick={() => {}}>⊞</NavButton>
        <NavButton onClick={logOff}>⏻</NavButton>
      </NavBar>
    </MobileContainer>
  );
};

export default MobileHome;
