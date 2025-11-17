import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.div`
  padding: 20px;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.body};
  background-color: ${theme.colors.window.body};
  height: 100%;
  overflow-y: auto;
`;

const SectionTitle = styled.h1`
  font-size: ${theme.typography.sizes.heading};
  font-weight: ${theme.typography.weights.black};
  font-family: ${theme.typography.fonts.display};
  border-bottom: 4px solid ${theme.colors.accents.hotPink};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.laserRed};
`;

const VideoCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.hotPink};
  box-shadow: 6px 6px 0px ${theme.colors.accents.hotPink};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  position: relative;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.hotPink};
  }
  
  &:before {
    content: '▶';
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    color: ${theme.colors.accents.laserRed};
  }
`;

const VideoTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.cyberYellow};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-right: 40px;
`;

const VideoMeta = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.electricBlue};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(0, 102, 255, 0.1);
  border: 2px solid ${theme.colors.accents.electricBlue};
  padding: 4px 12px;
  display: inline-block;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  color: ${theme.colors.text.primary};
  border-left: 4px solid ${theme.colors.accents.neonGreen};
  padding-left: 16px;
  background: rgba(0, 255, 65, 0.05);
  padding: 12px 16px;
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.laserRed};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.laserRed};
  box-shadow: 3px 3px 0px ${theme.colors.accents.laserRed};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  display: inline-block;
  margin-top: 8px;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.laserRed};
    background: ${theme.colors.accents.hotPink};
    border-color: ${theme.colors.accents.hotPink};
  }
`;

const YouTubeContent = () => (
  <Wrapper>
    <SectionTitle>YouTube Channel</SectionTitle>
    
    {/* <VideoCard>
      <VideoTitle>Building a Full-Stack React Application</VideoTitle>
      <VideoMeta>Published: March 2023 • 45 min • 1.2K views</VideoMeta>
      <Description>
        Complete tutorial on building a full-stack React application with Node.js backend, 
        including authentication, database integration, and deployment.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Watch Video</Link>
    </VideoCard> */}
    
    <VideoCard>
      <VideoTitle>Coming Soon..........</VideoTitle>
    </VideoCard>
  </Wrapper>
);

export default YouTubeContent;
