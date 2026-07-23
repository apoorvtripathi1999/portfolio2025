import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { WORK_EXPERIENCE_QUERY } from '../../lib/queries';
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
  border-bottom: 4px solid ${theme.colors.accents.electricBlue};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.hotPink};
`;

const JobCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.laserRed};
  box-shadow: 6px 6px 0px ${theme.colors.accents.laserRed};
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const JobTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.cyberYellow};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Company = styled.h3`
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.text.secondary};
  margin-bottom: 8px;
  font-family: ${theme.typography.fonts.primary};
`;

const DateRange = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.neonGreen};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid ${theme.colors.accents.neonGreen};
  padding: 4px 12px;
  display: inline-block;
  margin: 8px 0 16px 0;
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
  background: rgba(255, 0, 128, 0.1);
  border-left: 4px solid ${theme.colors.accents.hotPink};
  position: relative;

  &:before {
    content: '▶';
    color: ${theme.colors.accents.hotPink};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const WorkExperienceContent = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(WORK_EXPERIENCE_QUERY)
      .then((result) => {
        setJobs(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || jobs.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Work Experience</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && jobs.length === 0}
          emptyMessage="Add 'Work Experience' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Work Experience</SectionTitle>
      {jobs.map((job) => (
        <JobCard key={job._id}>
          <JobTitle>{job.jobTitle}</JobTitle>
          <Company>
            {job.company}{job.location ? ` — ${job.location}` : ''}
          </Company>
          <DateRange>
            {job.startDate}
            {job.isCurrent ? ' — Present' : job.endDate ? ` — ${job.endDate}` : ''}
          </DateRange>
          {job.description && <Description>{job.description}</Description>}
          {job.bullets && job.bullets.length > 0 && (
            <List>
              {job.bullets.map((bullet, i) => (
                <ListItem key={i}>{bullet}</ListItem>
              ))}
            </List>
          )}
        </JobCard>
      ))}
    </Wrapper>
  );
};

export default WorkExperienceContent;
