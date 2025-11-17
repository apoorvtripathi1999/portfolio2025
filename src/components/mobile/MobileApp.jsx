import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// Import all app content components
import EducationContent from '../apps/EducationContent';
import WorkExperienceContent from '../apps/WorkExperienceContent';
import TechnologiesContent from '../apps/TechnologiesContent';
import ProjectsContent from '../apps/ProjectsContent';
import AboutContent from '../apps/AboutContent';
import ArticlesContent from '../apps/ArticlesContent';
import ResearchContent from '../apps/ResearchContent';
import YouTubeContent from '../apps/YouTubeContent';
import ResumeContent from '../apps/ResumeContent';
import PongContent from '../apps/PongContent';
import MusicContent from '../apps/MusicContent';

const MobileAppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.colors.global.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const AppBar = styled.div`
  height: 56px;
  background: ${props => props.bgColor || theme.colors.accents.neonGreen};
  border-bottom: 3px solid ${props => props.bgColor || theme.colors.accents.neonGreen};
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 4px 0px ${props => props.bgColor || theme.colors.accents.neonGreen};
`;

const BackButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid ${theme.colors.global.background};
  color: ${theme.colors.global.background};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-weight: ${theme.typography.weights.black};
  
  &:active {
    transform: scale(0.95);
  }
`;

const AppTitle = styled.h1`
  font-family: ${theme.typography.fonts.display};
  font-size: 18px;
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.global.background};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const AppContent = styled.div`
  flex: 1;
  overflow-y: auto;
  background: ${theme.colors.window.body};
  
  /* Mobile-optimized scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.global.surface};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.accents.neonGreen};
    border-radius: 4px;
  }
`;

const MobileApp = ({ appId, onClose }) => {
  const appConfig = {
    education: {
      title: 'Education',
      color: theme.colors.accents.neonGreen,
      component: EducationContent
    },
    workExperience: {
      title: 'Work Experience',
      color: theme.colors.accents.electricBlue,
      component: WorkExperienceContent
    },
    technologies: {
      title: 'Technologies',
      color: theme.colors.accents.hotPink,
      component: TechnologiesContent
    },
    projects: {
      title: 'Projects',
      color: theme.colors.accents.cyberYellow,
      component: ProjectsContent
    },
    about: {
      title: 'About Me',
      color: theme.colors.accents.acidOrange,
      component: AboutContent
    },
    articles: {
      title: 'Articles',
      color: theme.colors.accents.toxicPurple,
      component: ArticlesContent
    },
    research: {
      title: 'Research',
      color: theme.colors.accents.laserRed,
      component: ResearchContent
    },
    youtube: {
      title: 'YouTube',
      color: theme.colors.accents.hotPink,
      component: YouTubeContent
    },
    resume: {
      title: 'Resume',
      color: '#FF6B35',
      component: ResumeContent
    },
    pong: {
      title: 'Pong',
      color: '#00FFFF',
      component: PongContent
    },
    music: {
      title: 'Music',
      color: '#FF9900',
      component: MusicContent
    }
  };

  const app = appConfig[appId];
  const ContentComponent = app?.component;

  if (!app) {
    return null;
  }

  return (
    <MobileAppContainer>
      <AppBar bgColor={app.color}>
        <BackButton onClick={onClose}>◀</BackButton>
        <AppTitle>{app.title}</AppTitle>
      </AppBar>
      <AppContent>
        {ContentComponent && <ContentComponent />}
      </AppContent>
    </MobileAppContainer>
  );
};

export default MobileApp;
