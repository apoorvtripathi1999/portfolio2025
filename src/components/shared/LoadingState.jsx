import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.div`
  padding: 20px;
  font-family: ${theme.typography.fonts.primary};
  background-color: ${theme.colors.window.body};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LoadingBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(0, 255, 65, 0.15);
  border: 1px solid ${theme.colors.accents.neonGreen};
  overflow: hidden;
`;

const LoadingFill = styled.div`
  height: 100%;
  background: ${theme.colors.accents.neonGreen};
  animation: loading 1.4s ease-in-out infinite;

  @keyframes loading {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(400%); }
  }
`;

const StatusText = styled.p`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.neonGreen};
  font-family: ${theme.typography.fonts.mono};
  letter-spacing: 1px;
`;

const ErrorBox = styled.div`
  padding: 16px;
  border: 3px solid ${theme.colors.accents.laserRed};
  background: rgba(255, 0, 0, 0.08);
  color: ${theme.colors.accents.laserRed};
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.body};
`;

const EmptyBox = styled.div`
  padding: 16px;
  border: 3px solid ${theme.colors.accents.cyberYellow};
  background: rgba(255, 255, 0, 0.05);
  color: ${theme.colors.accents.cyberYellow};
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.body};
`;

/**
 * Shared loading / error / empty state component.
 * Matches the retro Windows 95 design system.
 */
const LoadingState = ({ loading, error, empty, emptyMessage }) => {
  if (loading) {
    return (
      <Wrapper>
        <StatusText>▶ FETCHING DATA FROM SANITY CMS...</StatusText>
        <LoadingBar>
          <LoadingFill />
        </LoadingBar>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorBox>
          ✕ ERROR: {error.message || 'Failed to load content from Sanity.'}<br /><br />
          Make sure VITE_SANITY_PROJECT_ID is set in your .env file.
        </ErrorBox>
      </Wrapper>
    );
  }

  if (empty) {
    return (
      <Wrapper>
        <EmptyBox>
          ⚠ NO CONTENT FOUND<br /><br />
          {emptyMessage || 'Add content in Sanity Studio to see it here.'}
        </EmptyBox>
      </Wrapper>
    );
  }

  return null;
};

export default LoadingState;
