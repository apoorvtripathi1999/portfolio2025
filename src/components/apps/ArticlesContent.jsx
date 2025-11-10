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
    <SectionTitle>Articles</SectionTitle>
    
    <ArticleCard>
      <ArticleTitle>Does non repetitive code really translates to better performance?</ArticleTitle>
      <ArticleMeta>Published: July 2025 • 10 min read</ArticleMeta>
      <Description>We do not have to blindly follow the principles of clean code, as they are suggestions and best practices and does not define the overall context of code. But we should also not ignore the requirement and need for maintainability. We should design better code structure which can work with both performance and maintainability.</Description>
      <Link href="https://dev.to/apoorvtripathi1999/from-research-to-production-how-i-built-a-customer-churn-prediction-api-that-actually-works-5gdg" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>

    <ArticleCard>
      <ArticleTitle>From Research to Production: How I Built a Customer Churn Prediction API That Actually Works</ArticleTitle>
      <ArticleMeta>Published: July 2025 • 5 min read</ArticleMeta>
      <Description>
        Ever wondered how to bridge the gap between your ML experiments and real-world applications? I used to spend days, perfecting machine learning models, only to face the harsh reality that production deployment is a completely different beast.
      </Description>
      <Link href="https://dev.to/apoorvtripathi1999/from-research-to-production-how-i-built-a-customer-churn-prediction-api-that-actually-works-5gdg" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>Custom Transformers Are the Secret to Making ML Pipelines Work in Practice</ArticleTitle>
      <ArticleMeta>Published: July 2025 • 10 min read</ArticleMeta>
      <Description>
        Custom transformers aren't just about code organization—they're about embedding domain knowledge into your ML workflow.
      </Description>
      <Link href="https://dev.to/apoorvtripathi1999/custom-transformers-are-the-secret-to-making-ml-pipelines-work-in-practice-i14" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>The Class Imbalance Problem: How I Achieved 89% Accuracy on Customer Churn Prediction</ArticleTitle>
      <ArticleMeta>Published: July 2025 • 6 min read</ArticleMeta>
      <Description>
        Class imbalance doesn't have to be a death sentence for your ML models. Sometimes the best solution is the simplest: carefully balance your data and let the algorithms do what they do best. In my case, this approach led to an 89% accuracy rate that would have been impossible with the original imbalanced dataset.
      </Description>
      <Link href="https://dev.to/apoorvtripathi1999/the-class-imbalance-problem-how-i-achieved-89-accuracy-on-customer-churn-prediction-4chg" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
    
    <ArticleCard>
      <ArticleTitle>API Design That Doesn't Break: How Pydantic Saved My API</ArticleTitle>
      <ArticleMeta>Published: July 2025 • 5 min read</ArticleMeta>
      <Description>
        Good API design isn’t about flashy features—it’s about handling edge cases gracefully and making failure modes predictable.
      </Description>
      <Link href="https://dev.to/apoorvtripathi1999/api-design-that-doesnt-break-how-pydantic-saved-my-api-dkp" onClick={(e) => e.preventDefault()}>Read Article</Link>
    </ArticleCard>
  </Wrapper>
);

export default ArticlesContent;
