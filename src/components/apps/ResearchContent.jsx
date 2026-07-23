import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { RESEARCH_QUERY } from '../../lib/queries';
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
  border-bottom: 4px solid ${theme.colors.accents.laserRed};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.neonGreen};
`;

const ResearchCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.laserRed};
  box-shadow: 6px 6px 0px ${theme.colors.accents.laserRed};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.laserRed};
  }
`;

const ResearchTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.electricBlue};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatusBadge = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.cyberYellow};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(255, 255, 0, 0.1);
  border: 2px solid ${theme.colors.accents.cyberYellow};
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
  border-left: 4px solid ${theme.colors.accents.hotPink};
  padding: 12px 16px;
  background: rgba(255, 0, 128, 0.05);
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.neonGreen};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.neonGreen};
  box-shadow: 3px 3px 0px ${theme.colors.accents.neonGreen};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  display: inline-block;
  margin-top: 8px;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.neonGreen};
    background: ${theme.colors.accents.electricBlue};
    border-color: ${theme.colors.accents.electricBlue};
  }
`;

const STATUS_LABELS = {
  'in-progress': 'In Progress',
  'published': 'Published',
  'completed': 'Completed',
};

const ResearchContent = () => {
  const [research, setResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(RESEARCH_QUERY)
      .then((result) => {
        setResearch(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || research.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Research</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && research.length === 0}
          emptyMessage="Add 'Research' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Research</SectionTitle>
      {research.map((item) => (
        <ResearchCard key={item._id}>
          <ResearchTitle>{item.title}</ResearchTitle>
          {item.status && (
            <StatusBadge>{STATUS_LABELS[item.status] || item.status}</StatusBadge>
          )}
          {item.description && (
            <Description>{item.description}</Description>
          )}
          {item.publicationUrl && (
            <Link href={item.publicationUrl} target="_blank" rel="noopener noreferrer">
              View Publication
            </Link>
          )}
        </ResearchCard>
      ))}
    </Wrapper>
  );
};

export default ResearchContent;
