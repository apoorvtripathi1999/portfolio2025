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
  border-bottom: 4px solid ${theme.colors.accents.cyberYellow};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.toxicPurple};
`;

const ProjectCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 6px 6px 0px ${theme.colors.accents.cyberYellow};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.cyberYellow};
  }
`;

const ProjectTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.neonGreen};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectMeta = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.hotPink};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(255, 0, 128, 0.1);
  border: 2px solid ${theme.colors.accents.hotPink};
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
  border-left: 4px solid ${theme.colors.accents.electricBlue};
  padding-left: 16px;
  background: rgba(0, 102, 255, 0.05);
  padding: 12px 16px;
`;

const TechStack = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.secondary};
  margin: 12px 0;
  padding: 8px 12px;
  background: rgba(128, 0, 255, 0.1);
  border: 2px solid ${theme.colors.accents.toxicPurple};
  font-weight: ${theme.typography.weights.medium};
  font-family: ${theme.typography.fonts.mono};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.acidOrange};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.acidOrange};
  box-shadow: 3px 3px 0px ${theme.colors.accents.acidOrange};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.acidOrange};
    background: ${theme.colors.accents.laserRed};
    border-color: ${theme.colors.accents.laserRed};
  }
`;

const ProjectsContent = () => (
  <Wrapper>
    <SectionTitle>Featured Projects</SectionTitle>
    
    <ProjectCard>
      <ProjectTitle>E-Commerce Platform</ProjectTitle>
      <ProjectMeta>2023 • Full-Stack Web Application</ProjectMeta>
      <Description>
        A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, 
        payment processing, and admin dashboard. Supports 10,000+ concurrent users with 99.9% uptime.
      </Description>
      <TechStack>Tech Stack: React, Node.js, PostgreSQL, Redis, Docker, AWS</TechStack>
      <LinksContainer>
        <Link href="#" onClick={(e) => e.preventDefault()}>View Live Demo</Link>
        <Link href="#" onClick={(e) => e.preventDefault()}>GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>AI-Powered Task Manager</ProjectTitle>
      <ProjectMeta>2023 • Machine Learning Application</ProjectMeta>
      <Description>
        Intelligent task management system that uses natural language processing to automatically categorize 
        and prioritize tasks. Features include smart scheduling, deadline prediction, and productivity analytics.
      </Description>
      <TechStack>Tech Stack: Python, TensorFlow, React, FastAPI, MongoDB</TechStack>
      <LinksContainer>
        <Link href="#" onClick={(e) => e.preventDefault()}>View Live Demo</Link>
        <Link href="#" onClick={(e) => e.preventDefault()}>GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Real-Time Collaboration Tool</ProjectTitle>
      <ProjectMeta>2022 • Web Application</ProjectMeta>
      <Description>
        Collaborative workspace application similar to Figma, allowing multiple users to work on documents 
        simultaneously. Features include real-time cursors, change tracking, and conflict resolution.
      </Description>
      <TechStack>Tech Stack: Vue.js, Socket.io, Express.js, PostgreSQL, WebRTC</TechStack>
      <LinksContainer>
        <Link href="#" onClick={(e) => e.preventDefault()}>View Live Demo</Link>
        <Link href="#" onClick={(e) => e.preventDefault()}>GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Mobile Weather App</ProjectTitle>
      <ProjectMeta>2022 • React Native Application</ProjectMeta>
      <Description>
        Cross-platform mobile weather application with location-based forecasts, severe weather alerts, 
        and interactive maps. Features offline mode and push notifications for weather updates.
      </Description>
      <TechStack>Tech Stack: React Native, Redux, Weather API, Firebase, Expo</TechStack>
      <LinksContainer>
        <Link href="#" onClick={(e) => e.preventDefault()}>App Store</Link>
        <Link href="#" onClick={(e) => e.preventDefault()}>GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Blockchain Voting System</ProjectTitle>
      <ProjectMeta>2021 • Blockchain Application</ProjectMeta>
      <Description>
        Secure and transparent voting system built on Ethereum blockchain. Ensures voter anonymity while 
        maintaining a public, auditable record of all votes cast.
      </Description>
      <TechStack>Tech Stack: Solidity, Web3.js, React, Node.js, IPFS</TechStack>
      <LinksContainer>
        <Link href="#" onClick={(e) => e.preventDefault()}>View Live Demo</Link>
        <Link href="#" onClick={(e) => e.preventDefault()}>GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
  </Wrapper>
);

export default ProjectsContent;
