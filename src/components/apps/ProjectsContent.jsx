import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { PROJECTS_QUERY } from '../../lib/queries';
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
  border-bottom: 4px solid ${theme.colors.accents.cyberYellow};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.toxicPurple};
`;

const ProjectCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 6px 6px 0px ${theme.colors.accents.cyberYellow};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.cyberYellow};
  }
`;

const ProjectTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.neonGreen};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProjectMeta = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.hotPink};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(255, 0, 128, 0.1);
  border: 2px solid ${theme.colors.accents.hotPink};
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

const TechStack = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.secondary};
  margin: 12px 0;
  padding: 8px 12px;
  background: rgba(128, 0, 255, 0.1);
  border: 2px solid ${theme.colors.accents.toxicPurple};
  font-weight: ${theme.typography.weights.medium};
  font-family: ${theme.typography.fonts.mono};
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.acidOrange};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.acidOrange};
  box-shadow: 3px 3px 0px ${theme.colors.accents.acidOrange};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.acidOrange};
    background: ${theme.colors.accents.laserRed};
    border-color: ${theme.colors.accents.laserRed};
  }
`;

const ProjectsContent = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(PROJECTS_QUERY)
      .then((result) => {
        setProjects(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || projects.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>Featured Projects</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && projects.length === 0}
          emptyMessage="Add 'Project' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>Featured Projects</SectionTitle>
      {projects.map((project) => (
        <ProjectCard key={project._id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          {(project.year || project.category) && (
            <ProjectMeta>
              {project.year && `${project.year}`}
              {project.year && project.category && ' • '}
              {project.category && project.category}
            </ProjectMeta>
          )}
          {project.description && (
            <Description>{project.description}</Description>
          )}
          {project.techStack && project.techStack.length > 0 && (
            <TechStack>Tech Stack: {project.techStack.join(', ')}</TechStack>
          )}
          {(project.githubUrl || project.liveUrl) && (
            <LinksContainer>
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </Link>
              )}
            </LinksContainer>
          )}
        </ProjectCard>
      ))}
    </Wrapper>
  );
};

export default ProjectsContent;
