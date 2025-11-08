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
  border-bottom: 4px solid ${theme.colors.accents.toxicPurple};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.acidOrange};
`;

const ArticleCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.toxicPurple};
  box-shadow: 6px 6px 0px ${theme.colors.accents.toxicPurple};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.toxicPurple};
  }
`;

const ArticleTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.cyberYellow};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ArticleMeta = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.neonGreen};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid ${theme.colors.accents.neonGreen};
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

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.hotPink};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.hotPink};
  box-shadow: 3px 3px 0px ${theme.colors.accents.hotPink};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  display: inline-block;
  margin-top: 8px;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.hotPink};
    background: ${theme.colors.accents.laserRed};
    border-color: ${theme.colors.accents.laserRed};
  }
`;

const ArticlesContent = () => (
  <Wrapper>
    <SectionTitle>Technical Articles</SectionTitle>
    
    <ArticleCard>
      <ArticleTitle>Building Scalable React Applications</ArticleTitle>
      <ArticleMeta>Published: March 2023 • 8 min read</ArticleMeta>
      <Description>
        A comprehensive guide to architecting React applications that can handle millions of users. 
        Covers code splitting, lazy loading, and performance optimization techniques.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>The Future of Web Development</ArticleTitle>
      <ArticleMeta>Published: February 2023 • 6 min read</ArticleMeta>
      <Description>
        Exploring emerging technologies and trends in web development, including WebAssembly, 
        Progressive Web Apps, and the evolution of JavaScript frameworks.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>Mastering TypeScript for Large Codebases</ArticleTitle>
      <ArticleMeta>Published: January 2023 • 10 min read</ArticleMeta>
      <Description>
        Best practices for using TypeScript in enterprise applications, including advanced type 
        patterns, module organization, and team collaboration strategies.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>Cloud-Native Architecture Patterns</ArticleTitle>
      <ArticleMeta>Published: December 2022 • 12 min read</ArticleMeta>
      <Description>
        Designing applications for the cloud era, covering microservices, containerization, 
        and serverless architectures with real-world examples.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
  </Wrapper>
);

export default ArticlesContent;
