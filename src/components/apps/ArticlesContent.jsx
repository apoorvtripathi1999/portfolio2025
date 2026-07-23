import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { ARTICLES_QUERY } from '../../lib/queries';
import LoadingState from '../shared/LoadingState';

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
  padding: 12px 16px;
  background: rgba(0, 102, 255, 0.05);
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
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

const ArticlesContent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(ARTICLES_QUERY)
      .then((result) => {
        setArticles(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || articles.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Articles</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && articles.length === 0}
          emptyMessage="Add 'Article' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Articles</SectionTitle>
      {articles.map((article) => (
        <ArticleCard key={article._id}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleMeta>
            Published: {article.publishDate}
            {article.readTime ? ` • ${article.readTime} min read` : ''}
          </ArticleMeta>
          {article.description && (
            <Description>{article.description}</Description>
          )}
          {article.url && (
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              Read Article
            </Link>
          )}
        </ArticleCard>
      ))}
    </Wrapper>
  );
};

export default ArticlesContent;
