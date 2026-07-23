import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { TECHNOLOGIES_QUERY } from '../../lib/queries';
import LoadingState from '../shared/LoadingState';

// Map theme color names to actual theme values
const COLOR_MAP = {
  neonGreen: {
    border: theme.colors.accents.neonGreen,
    bg: 'rgba(0, 255, 65, 0.1)',
  },
  electricBlue: {
    border: theme.colors.accents.electricBlue,
    bg: 'rgba(0, 102, 255, 0.1)',
  },
  toxicPurple: {
    border: theme.colors.accents.toxicPurple,
    bg: 'rgba(128, 0, 255, 0.1)',
  },
  hotPink: {
    border: theme.colors.accents.hotPink,
    bg: 'rgba(255, 0, 128, 0.1)',
  },
  cyberYellow: {
    border: theme.colors.accents.cyberYellow,
    bg: 'rgba(255, 255, 0, 0.1)',
  },
  acidOrange: {
    border: theme.colors.accents.acidOrange,
    bg: 'rgba(255, 100, 0, 0.1)',
  },
  laserRed: {
    border: theme.colors.accents.laserRed,
    bg: 'rgba(255, 0, 0, 0.1)',
  },
};

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
  border: 4px solid ${(props) => props.$borderColor};
  box-shadow: 6px 6px 0px ${(props) => props.$borderColor};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${(props) => props.$borderColor};
  }
`;

const CategoryTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${(props) => props.$color};
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
  background: ${(props) => props.$bg};
  border: 3px solid ${(props) => props.$borderColor};
  box-shadow: 3px 3px 0px ${(props) => props.$borderColor};
  padding: 8px 16px;
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  cursor: default;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${(props) => props.$borderColor};
  }
`;

const TechnologiesContent = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(TECHNOLOGIES_QUERY)
      .then((result) => {
        setCategories(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || categories.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Technologies &amp; Skills</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && categories.length === 0}
          emptyMessage="Add 'Technology Category' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Technologies &amp; Skills</SectionTitle>
      {categories.map((cat) => {
        const colors = COLOR_MAP[cat.color] || COLOR_MAP.neonGreen;
        return (
          <CategoryCard key={cat._id} $borderColor={colors.border}>
            <CategoryTitle $color={colors.border}>{cat.categoryName}</CategoryTitle>
            <TechList>
              {cat.items && cat.items.map((item, i) => (
                <TechItem
                  key={i}
                  $borderColor={colors.border}
                  $bg={colors.bg}
                >
                  {item}
                </TechItem>
              ))}
            </TechList>
          </CategoryCard>
        );
      })}
    </Wrapper>
  );
};

export default TechnologiesContent;
