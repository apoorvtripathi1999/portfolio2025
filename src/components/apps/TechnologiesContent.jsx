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
  text-shadow: 2px 2px 0px ${theme.colors.accents.cyberYellow};
`;

const CategoryCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${props => props.borderColor};
  box-shadow: 6px 6px 0px ${props => props.borderColor};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${props => props.borderColor};
  }
`;

const CategoryTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${props => props.color};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0;
`;

const TechItem = styled.div`
  background: ${props => props.backgroundColor};
  border: 3px solid ${props => props.borderColor};
  box-shadow: 3px 3px 0px ${props => props.borderColor};
  padding: 8px 16px;
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  cursor: pointer;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${props => props.borderColor};
  }
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  color: ${theme.colors.text.secondary};
  border-left: 4px solid ${props => props.accentColor};
  padding-left: 16px;
  background: ${props => `rgba(${props.rgbaColor}, 0.05)`};
  padding: 12px 16px;
`;

const TechnologiesContent = () => (
  <Wrapper>
    <SectionTitle>Technologies & Skills</SectionTitle>
    
    <CategoryCard borderColor={theme.colors.accents.neonGreen}>
      <CategoryTitle color={theme.colors.accents.neonGreen}>Programming Languages, Frameworks & DevOps</CategoryTitle>
      <TechList>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Python</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">SQL</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">FastAPI</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Pydantic</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Docker</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Git</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Cursor AI</TechItem>
      </TechList>
    </CategoryCard>
    
    <CategoryCard borderColor={theme.colors.accents.electricBlue}>
      <CategoryTitle color={theme.colors.accents.electricBlue}>Machine Learning & AI Technologies</CategoryTitle>
      <TechList>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Scikit learn</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Tensorflow</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Keras</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Huggingface</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Langchain</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Natural Language Processing</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Large Language Models</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Deep Naural Network</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Model Context Protocol</TechItem>
      </TechList>
    </CategoryCard>
    
    <CategoryCard borderColor={theme.colors.accents.toxicPurple}>
      <CategoryTitle color={theme.colors.accents.toxicPurple}>Data Analytics & Visualization</CategoryTitle>
      <TechList>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Power BI</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">MS Excel</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Pandas and Numpy</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Mathplotlib</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Google Big Query</TechItem>
      </TechList>
    </CategoryCard>
  </Wrapper>
);

export default TechnologiesContent;
