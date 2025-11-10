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
  padding-left: 16px;
  background: rgba(0, 102, 255, 0.05);
  padding: 12px 16px;
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
    content: "▶";
    color: ${theme.colors.accents.hotPink};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const WorkExperienceContent = () => (
  <Wrapper>
    <SectionTitle>Work Experience</SectionTitle>

    <JobCard>
      <JobTitle>Lead QA/DataScience Intern</JobTitle>
      <Company>Kahani - Wilmington, DE, Remote</Company>
      <DateRange>OCT 2025 - Present</DateRange>
      <Description>
        QA and Data Science intern, working on setting up the data infrastructure for early stage startup.
      </Description>
      <List>
        <ListItem>Design and implement Kahani's data infrastructure for Pilot 2 and beyond working on event tracking, schema
design, pipelines with Firebase, Pub/Sub, BigQuery, dashboards.
</ListItem>
        <ListItem> Define and monitor core product metrics like engagement, retention, symptom improvement to
evaluate product-market fit.</ListItem>
      </List>
    </JobCard>

    <JobCard>
      <JobTitle>Product Operations Manager</JobTitle>
      <Company>Allen Digital Private Limited - Bengaluru, India</Company>
      <DateRange>JAN 2024 - JUN 2024</DateRange>
      <Description>
        Worked alongside the product and tech teams to manage and own product development cycles and feature adherence.
      </Description>
      <List>
        <ListItem>Improved the non-tech queries turn around time to an average of 2 days from a week through constant monitoring and maintaining the issue tracking analytics.</ListItem>
        <ListItem>Managed operations for 1000+ cohorts, ensuring regular metrics adharence and proper documentation.</ListItem>
      </List>
    </JobCard>
    
    <JobCard>
      <JobTitle>Program Manager</JobTitle>
      <Company>Heycoach - Bengaluru, India</Company>
      <DateRange>APR 2023 - DEC 2023</DateRange>
      <Description>
        Progam manager worked with teams on special projects for an early stage startup.
      </Description>
      <List>
        <ListItem>Led engagement initiatives, creating SOPs that enhanced cross-team communication.</ListItem>
        <ListItem>Set up and managed a B2B team onboarding 65+ high-value clients during the first month.</ListItem>
        <ListItem>Managed the development of a feature for the platform called DSA Visualizer.
</ListItem>
      </List>
    </JobCard>
    
    <JobCard>
      <JobTitle>Operations Associate</JobTitle>
      <Company>Newton School - Bengaluru, India</Company>
      <DateRange>Nov 2021 - Mar 2023</DateRange>
      <Description>
        Associate in operations management, worked with multiple teams for improving the operations efficiency for early-stage startup.
      </Description>
      <List>
        <ListItem>Prepared students for job interviews through analytics and other resources, resulting in 600+
conversions during the year 2020 to 2021.</ListItem>
        <ListItem>Boosted student experience scores (NPS) by 40% through process improvements and feedback
analysis.
</ListItem>
        <ListItem>Managed a team of support associates improving student outreach to around 90%.</ListItem>
      </List>
    </JobCard>
  </Wrapper>
);

export default WorkExperienceContent;
