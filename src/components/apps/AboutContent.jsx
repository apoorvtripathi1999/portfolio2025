import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { ABOUT_QUERY } from '../../lib/queries';
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

const AboutContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(ABOUT_QUERY)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || !data) {
    return (
      <Wrapper>
        <SectionTitle>About Me</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && !data}
          emptyMessage="Add an 'About Me' document in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>About Me</SectionTitle>
      <Description>{data.bioText}</Description>
    </Wrapper>
  );
};

export default AboutContent;
