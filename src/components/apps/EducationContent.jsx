import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { EDUCATION_QUERY } from '../../lib/queries';
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
  padding: 12px 16px;
  background: rgba(255, 255, 0, 0.05);
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
    content: '▶';
    color: ${theme.colors.accents.electricBlue};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const EducationContent = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(EDUCATION_QUERY)
      .then((result) => {
        setEntries(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || entries.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Education</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && entries.length === 0}
          emptyMessage="Add 'Education' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Education</SectionTitle>
      {entries.map((edu) => (
        <EducationCard key={edu._id}>
          <DegreeTitle>{edu.degree}</DegreeTitle>
          {edu.institution && <Institution>{edu.institution}</Institution>}
          {(edu.startYear || edu.endYear) && (
            <DateRange>
              {edu.startYear}{edu.endYear ? ` - ${edu.endYear}` : ''}
            </DateRange>
          )}
          {edu.description && <Description>{edu.description}</Description>}
          {edu.highlights && edu.highlights.length > 0 && (
            <List>
              {edu.gpa && <ListItem>GPA: {edu.gpa}</ListItem>}
              {edu.highlights.map((h, i) => (
                <ListItem key={i}>{h}</ListItem>
              ))}
            </List>
          )}
          {!edu.highlights && edu.gpa && (
            <List>
              <ListItem>GPA: {edu.gpa}</ListItem>
            </List>
          )}
        </EducationCard>
      ))}
    </Wrapper>
  );
};

export default EducationContent;
