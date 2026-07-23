import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { RESUME_QUERY } from '../../lib/queries';
import LoadingState from '../shared/LoadingState';

const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${theme.colors.accents.neonGreen}; }
  50%       { box-shadow: 0 0 40px ${theme.colors.accents.neonGreen}, 0 0 60px ${theme.colors.accents.electricBlue}; }
`;

const downloadProgress = keyframes`
  0%   { width: 0%; }
  100% { width: 100%; }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43%                 { transform: translate3d(0,-10px,0); }
  70%                      { transform: translate3d(0,-5px,0); }
  90%                      { transform: translate3d(0,-2px,0); }
`;

const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background: ${theme.colors.global.background};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.primary};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Header = styled.div`
  text-align: center;
  animation: ${slideDown} 0.6s ease-out;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.neonGreen};
  text-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.text.primary};
  opacity: 0.9;
  margin-bottom: 30px;
`;

const PreviewSection = styled.div`
  background: rgba(138, 43, 226, 0.1);
  border: 3px solid ${theme.colors.accents.electricBlue};
  border-radius: 8px;
  padding: 30px;
  animation: ${slideDown} 0.6s ease-out 0.2s both;
`;

const PreviewTitle = styled.h2`
  font-size: 24px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.electricBlue};
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ResumePreview = styled.div`
  background: ${theme.colors.global.background};
  border: 4px solid ${theme.colors.accents.electricBlue};
  border-radius: 4px;
  min-height: 600px;
  height: 70vh;
  box-shadow: 6px 6px 0px ${theme.colors.accents.electricBlue};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    background: linear-gradient(90deg,
      ${theme.colors.accents.neonGreen},
      ${theme.colors.accents.electricBlue},
      ${theme.colors.accents.hotPink});
    z-index: 1;
  }
`;

const PDFEmbed = styled.embed`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const DownloadSection = styled.div`
  animation: ${slideDown} 0.6s ease-out 0.4s both;
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const DownloadCard = styled.div`
  background: rgba(0, 191, 255, 0.1);
  border: 3px solid ${theme.colors.accents.neonGreen};
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  transition: all ${theme.animations.fast};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0px ${theme.colors.global.shadow};
    border-color: ${theme.colors.accents.electricBlue};
  }
`;

const DownloadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
  animation: ${bounce} 2s ease-in-out infinite;
`;

const DownloadTitle = styled.h3`
  font-size: 20px;
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.accents.neonGreen};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DownloadDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.text.primary};
  opacity: 0.8;
  margin-bottom: 20px;
`;

const DownloadButton = styled.button`
  background: ${theme.colors.accents.electricBlue};
  border: 3px solid ${theme.colors.text.primary};
  color: ${theme.colors.global.background};
  font-family: ${theme.typography.fonts.primary};
  font-size: 16px;
  font-weight: ${theme.typography.weights.bold};
  padding: 12px 24px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all ${theme.animations.fast};
  box-shadow: 4px 4px 0px ${theme.colors.global.shadow};
  text-shadow: 1px 1px 0px ${theme.colors.global.shadow};
  animation: ${(props) => (props.$downloading ? pulseGlow : 'none')} 1s ease-in-out infinite;

  &:hover {
    background: ${theme.colors.accents.neonGreen};
    border-color: ${theme.colors.accents.hotPink};
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px ${theme.colors.global.shadow};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px ${theme.colors.global.shadow};
  }

  &:disabled { opacity: 0.7; cursor: not-allowed; }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(138, 43, 226, 0.3);
  border: 1px solid ${theme.colors.text.primary};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 15px;
  display: ${(props) => (props.$show ? 'block' : 'none')};
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.accents.neonGreen}, ${theme.colors.accents.electricBlue});
  animation: ${downloadProgress} 2s ease-out forwards;
`;

const StatusMessage = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: rgba(124, 58, 237, 0.2);
  border: 2px solid ${theme.colors.accents.neonGreen};
  border-radius: 4px;
  color: ${theme.colors.accents.neonGreen};
  font-weight: ${theme.typography.weights.bold};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: ${(props) => (props.$show ? 'block' : 'none')};
`;

const ResumeContent = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadState, setDownloadState] = useState({
    downloading: false,
    progress: false,
    complete: false,
  });

  useEffect(() => {
    client
      .fetch(RESUME_QUERY)
      .then((result) => {
        setResumeData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleDownload = () => {
    if (!resumeData?.fileUrl) return;
    setDownloadState({ downloading: true, progress: true, complete: false });

    setTimeout(() => {
      setDownloadState({ downloading: false, progress: false, complete: true });

      const link = document.createElement('a');
      link.href = resumeData.fileUrl;
      link.download = `${resumeData.label || 'Resume'}.pdf`;
      link.target = '_blank';
      link.click();

      setTimeout(() => {
        setDownloadState({ downloading: false, progress: false, complete: false });
      }, 3000);
    }, 2000);
  };

  return (
    <ResumeContainer>
      <Header>
        <Title>My Resume</Title>
        <Subtitle>Download my latest resume in PDF format</Subtitle>
      </Header>

      {(loading || error || !resumeData) ? (
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && !resumeData}
          emptyMessage="Upload a resume PDF in Sanity Studio under 'Resume'."
        />
      ) : (
        <>
          <PreviewSection>
            <PreviewTitle>Resume Preview</PreviewTitle>
            <ResumePreview>
              <PDFEmbed
                src={resumeData.fileUrl}
                type="application/pdf"
                title="Resume Preview"
              />
            </ResumePreview>
          </PreviewSection>

          <DownloadSection>
            <PreviewTitle>Download Resume</PreviewTitle>
            <DownloadGrid>
              <DownloadCard>
                <DownloadIcon>📄</DownloadIcon>
                <DownloadTitle>PDF Format</DownloadTitle>
                <DownloadDescription>
                  Download the latest version of my resume.
                  {resumeData.updatedAt && (
                    <><br />Last updated: {new Date(resumeData.updatedAt).toLocaleDateString()}</>
                  )}
                </DownloadDescription>
                <DownloadButton
                  $downloading={downloadState.downloading}
                  onClick={handleDownload}
                  disabled={downloadState.downloading}
                >
                  {downloadState.downloading ? 'Preparing...' : 'Download Resume'}
                </DownloadButton>
                <ProgressBar $show={downloadState.progress}>
                  <ProgressFill />
                </ProgressBar>
                <StatusMessage $show={downloadState.complete}>
                  ✓ Resume Downloaded Successfully!
                </StatusMessage>
              </DownloadCard>
            </DownloadGrid>
          </DownloadSection>
        </>
      )}
    </ResumeContainer>
  );
};

export default ResumeContent;