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
  margin-bottom: 16px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.electricBlue};
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  color: ${theme.colors.text.primary};
  border-left: 4px solid ${theme.colors.accents.hotPink};
  padding-left: 16px;
  background: rgba(0, 255, 65, 0.05);
  padding: 16px;
  margin: 16px 0;
  box-shadow: 4px 4px 0px rgba(0, 255, 65, 0.2);
`;

const AboutContent = () => (
  <Wrapper>
    <SectionTitle>About Me</SectionTitle>
    
    <Description>
      I'm a passionate full-stack developer with over 5 years of experience building modern web applications. 
      I specialize in React, Node.js, and cloud technologies, with a strong focus on creating scalable, 
      user-friendly solutions.
    </Description>
    
    <Description>
      My journey in software development began during my computer science studies, where I discovered my love 
      for solving complex problems through code. Since then, I've worked with startups and established 
      companies, helping them build robust digital solutions.
    </Description>
    
    <Description>
      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
      or sharing knowledge through technical writing and mentoring. I believe in continuous learning and 
      staying up-to-date with the latest industry trends.
    </Description>
  </Wrapper>
);

export default AboutContent;
