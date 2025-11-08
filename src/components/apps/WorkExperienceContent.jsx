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
  border-bottom: 4px solid ${theme.colors.accents.electricBlue};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.hotPink};
`;

const JobCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.laserRed};
  box-shadow: 6px 6px 0px ${theme.colors.accents.laserRed};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  position: relative;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.laserRed};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, ${theme.colors.accents.laserRed}, ${theme.colors.accents.hotPink});
    z-index: -1;
  }
`;

const JobTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.cyberYellow};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Company = styled.h3`
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.text.secondary};
  margin-bottom: 8px;
  font-family: ${theme.typography.fonts.primary};
`;

const DateRange = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.neonGreen};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid ${theme.colors.accents.neonGreen};
  padding: 4px 12px;
  display: inline-block;
  margin: 8px 0 16px 0;
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

const List = styled.ul`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  padding-left: 0;
  color: ${theme.colors.text.primary};
  list-style: none;
`;

const ListItem = styled.li`
  margin: 8px 0;
  padding: 8px 16px;
  background: rgba(255, 0, 128, 0.1);
  border-left: 4px solid ${theme.colors.accents.hotPink};
  position: relative;
  
  &:before {
    content: "▶";
    color: ${theme.colors.accents.hotPink};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const WorkExperienceContent = () => (
  <Wrapper>
    <SectionTitle>Work Experience</SectionTitle>
    
    <JobCard>
      <JobTitle>Lead Developer</JobTitle>
      <Company>Tech Solutions Inc.</Company>
      <DateRange>2021 - Present</DateRange>
      <Description>
        Responsible for leading the front-end development of the company's flagship SaaS platform, utilizing modern web technologies to deliver a high-performance user experience.
      </Description>
      <List>
        <ListItem>Architected and implemented a new component library in React, reducing development time by 30%</ListItem>
        <ListItem>Mentored a team of four junior developers, fostering best practices in code quality and testing</ListItem>
        <ListItem>Optimized application load times by 50% through code splitting and asset optimization</ListItem>
        <ListItem>Led the migration from legacy jQuery to modern React architecture</ListItem>
      </List>
    </JobCard>
    
    <JobCard>
      <JobTitle>Senior Frontend Developer</JobTitle>
      <Company>Digital Innovations LLC</Company>
      <DateRange>2019 - 2021</DateRange>
      <Description>
        Developed and maintained responsive web applications using React, Vue.js, and modern CSS frameworks.
      </Description>
      <List>
        <ListItem>Built responsive e-commerce platform serving 100,000+ daily active users</ListItem>
        <ListItem>Implemented real-time features using WebSocket connections and Socket.io</ListItem>
        <ListItem>Collaborated with UX/UI designers to create intuitive user interfaces</ListItem>
        <ListItem>Reduced bundle size by 40% through code optimization and tree shaking</ListItem>
      </List>
    </JobCard>
    
    <JobCard>
      <JobTitle>Frontend Developer</JobTitle>
      <Company>StartupXYZ</Company>
      <DateRange>2018 - 2019</DateRange>
      <Description>
        Full-stack development role focusing on rapid prototyping and MVP development for early-stage startup.
      </Description>
      <List>
        <ListItem>Developed MVP web application using React and Node.js</ListItem>
        <ListItem>Implemented user authentication and authorization systems</ListItem>
        <ListItem>Created responsive designs for mobile and desktop platforms</ListItem>
        <ListItem>Participated in agile development processes and sprint planning</ListItem>
      </List>
    </JobCard>
  </Wrapper>
);

export default WorkExperienceContent;
