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
      <CategoryTitle color={theme.colors.accents.neonGreen}>Frontend Development</CategoryTitle>
      <Description accentColor={theme.colors.accents.neonGreen} rgbaColor="0, 255, 65">
        Modern web technologies for building responsive and interactive user interfaces.
      </Description>
      <TechList>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">React</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Vue.js</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">TypeScript</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">JavaScript (ES6+)</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">HTML5</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">CSS3</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Sass/SCSS</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Styled Components</TechItem>
        <TechItem borderColor={theme.colors.accents.neonGreen} backgroundColor="rgba(0, 255, 65, 0.1)">Tailwind CSS</TechItem>
      </TechList>
    </CategoryCard>
    
    <CategoryCard borderColor={theme.colors.accents.electricBlue}>
      <CategoryTitle color={theme.colors.accents.electricBlue}>Backend Development</CategoryTitle>
      <Description accentColor={theme.colors.accents.electricBlue} rgbaColor="0, 102, 255">
        Server-side technologies and database management for scalable applications.
      </Description>
      <TechList>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Node.js</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Express.js</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Python</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Django</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">PostgreSQL</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">MongoDB</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">Redis</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">GraphQL</TechItem>
        <TechItem borderColor={theme.colors.accents.electricBlue} backgroundColor="rgba(0, 102, 255, 0.1)">REST APIs</TechItem>
      </TechList>
    </CategoryCard>
    
    <CategoryCard borderColor={theme.colors.accents.toxicPurple}>
      <CategoryTitle color={theme.colors.accents.toxicPurple}>Cloud & DevOps</CategoryTitle>
      <Description accentColor={theme.colors.accents.toxicPurple} rgbaColor="128, 0, 255">
        Cloud platforms and deployment technologies for modern application hosting.
      </Description>
      <TechList>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">AWS</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Google Cloud</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Docker</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Kubernetes</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">CI/CD</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Git</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">GitHub Actions</TechItem>
        <TechItem borderColor={theme.colors.accents.toxicPurple} backgroundColor="rgba(128, 0, 255, 0.1)">Jenkins</TechItem>
      </TechList>
    </CategoryCard>
    
    <CategoryCard borderColor={theme.colors.accents.acidOrange}>
      <CategoryTitle color={theme.colors.accents.acidOrange}>Tools & Frameworks</CategoryTitle>
      <Description accentColor={theme.colors.accents.acidOrange} rgbaColor="255, 102, 0">
        Development tools and frameworks that enhance productivity and code quality.
      </Description>
      <TechList>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Webpack</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Vite</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Jest</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Cypress</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">ESLint</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Prettier</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">Figma</TechItem>
        <TechItem borderColor={theme.colors.accents.acidOrange} backgroundColor="rgba(255, 102, 0, 0.1)">VS Code</TechItem>
      </TechList>
    </CategoryCard>
  </Wrapper>
);

export default TechnologiesContent;
