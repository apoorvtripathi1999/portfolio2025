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

const ResearchMeta = styled.div`
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
  padding-left: 16px;
  background: rgba(255, 0, 128, 0.05);
  padding: 12px 16px;
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.primary};
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

const ResearchContent = () => (
  <Wrapper>
    <SectionTitle>Research & Publications</SectionTitle>
    
    <ResearchCard>
      <ResearchTitle>Neural Networks for Real-Time Image Processing</ResearchTitle>
      <ResearchMeta>Published: Journal of Computer Science, 2023</ResearchMeta>
      <Description>
        Research on optimizing convolutional neural networks for real-time image processing applications. 
        Developed novel architecture that reduces inference time by 40% while maintaining accuracy.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>View Publication</Link>
    </ResearchCard>
    
    <ResearchCard>
      <ResearchTitle>Blockchain Consensus Mechanisms in IoT Networks</ResearchTitle>
      <ResearchMeta>Published: IEEE Transactions on IoT, 2022</ResearchMeta>
      <Description>
        Investigated the feasibility of blockchain technology in Internet of Things networks, 
        proposing a lightweight consensus mechanism suitable for resource-constrained devices.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>View Publication</Link>
    </ResearchCard>
    
    <ResearchCard>
      <ResearchTitle>Quantum Computing Applications in Cryptography</ResearchTitle>
      <ResearchMeta>Published: Quantum Information Processing, 2022</ResearchMeta>
      <Description>
        Theoretical analysis of quantum algorithms for cryptographic applications, including 
        post-quantum cryptography and quantum key distribution protocols.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>View Publication</Link>
    </ResearchCard>
    
    <ResearchCard>
      <ResearchTitle>Machine Learning for Predictive Maintenance</ResearchTitle>
      <ResearchMeta>Published: Industrial AI Journal, 2021</ResearchMeta>
      <Description>
        Developed machine learning models for predicting equipment failures in manufacturing 
        environments, achieving 95% accuracy in failure prediction.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>View Publication</Link>
    </ResearchCard>
  </Wrapper>
);

export default ResearchContent;
