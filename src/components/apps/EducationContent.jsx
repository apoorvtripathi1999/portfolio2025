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
  border-bottom: 4px solid ${theme.colors.accents.neonGreen};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.electricBlue};
`;

const EducationCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.electricBlue};
  box-shadow: 6px 6px 0px ${theme.colors.accents.electricBlue};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.electricBlue};
  }
`;

const DegreeTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.neonGreen};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Institution = styled.h3`
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.text.secondary};
  margin-bottom: 4px;
  font-family: ${theme.typography.fonts.primary};
`;

const DateRange = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.hotPink};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(255, 0, 128, 0.1);
  border: 2px solid ${theme.colors.accents.hotPink};
  padding: 4px 12px;
  display: inline-block;
  margin: 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  color: ${theme.colors.text.primary};
  border-left: 4px solid ${theme.colors.accents.cyberYellow};
  padding-left: 16px;
  background: rgba(255, 255, 0, 0.05);
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
  background: rgba(0, 102, 255, 0.1);
  border-left: 4px solid ${theme.colors.accents.electricBlue};
  position: relative;
  
  &:before {
    content: "▶";
    color: ${theme.colors.accents.electricBlue};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const EducationContent = () => (
  <Wrapper>
    <SectionTitle>Education</SectionTitle>
    
    <EducationCard>
      <DegreeTitle>Master of Science in Computer Science</DegreeTitle>
      <Institution>University of Technology</Institution>
      <DateRange>2020 - 2022</DateRange>
      <Description>
        Specialized in Artificial Intelligence and Machine Learning with focus on deep learning applications.
      </Description>
      <List>
        <ListItem>GPA: 3.8/4.0</ListItem>
        <ListItem>Thesis: "Advanced Neural Networks for Image Recognition"</ListItem>
        <ListItem>Relevant Coursework: Machine Learning, Data Structures, Algorithms</ListItem>
      </List>
    </EducationCard>
    
    <EducationCard>
      <DegreeTitle>Bachelor of Science in Software Engineering</DegreeTitle>
      <Institution>State University</Institution>
      <DateRange>2016 - 2020</DateRange>
      <Description>
        Comprehensive program covering software development, system design, and project management.
      </Description>
      <List>
        <ListItem>GPA: 3.6/4.0</ListItem>
        <ListItem>Dean's List: Fall 2018, Spring 2019</ListItem>
        <ListItem>Senior Project: "E-commerce Platform with React and Node.js"</ListItem>
      </List>
    </EducationCard>
    
    <EducationCard>
      <DegreeTitle>Certifications</DegreeTitle>
      <List>
        <ListItem>AWS Certified Solutions Architect (2023)</ListItem>
        <ListItem>Google Cloud Professional Developer (2022)</ListItem>
        <ListItem>Certified Scrum Master (2021)</ListItem>
      </List>
    </EducationCard>
  </Wrapper>
);

export default EducationContent;
