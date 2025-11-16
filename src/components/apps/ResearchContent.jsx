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
    <SectionTitle>Research</SectionTitle>
    
    <ResearchCard>
      <ResearchTitle>Multi Agent Reinforcement learning application in constrained supply chains for dynamic pricing.</ResearchTitle>
      <Description>
      This research aims to optimize dynamic pricing in applications like flight prices, carpooling prices, product pricing in e-commerce, ticketing in sports/events etc. This research can also be considered as a study of making automated supply chain decisions and can ultimately influence how decisions are going to be made in automated manufacturing supply chains. 
      </Description>
    </ResearchCard>
    
    <ResearchCard>
      <ResearchTitle>Multi-RAG based Named entity recognition for clinical data</ResearchTitle>
      <Description>
        This research aims to improve medical Named Entity Recognition by enhancing an existing system that uses Large Language Models and Retrieval Augmented Generation. The study builds upon a foundational model that utilized Dictionary-Infused RAG for zero-shot entity identification using the UMLS database and KATE for one-shot classification. This new work introduces three key enhancements to make the system more reliable, dynamic, and cost-effective. First, it integrates advanced prompting techniques, such as chain of thought and meta prompting, with the existing TANL formatting to improve the LLM's output quality. Second, it adds caching techniques to the RAG system to store previously retrieved information, which significantly reduces the high computational costs and resource demands. Finally, it overcomes a major limitation of the original model by making the system more dynamic; it first classifies the *type* of entity e.g., gene, drug, chemical, and then queries a *respective* database like NCBI gene for genes, to retrieve more accurate context, moving beyond the original's reliance on only UMLS.
      </Description>
    </ResearchCard>

      <ResearchCard>
      <ResearchTitle>IoT Based Smart Farm Monitoring System</ResearchTitle>
      <Description>
        The farm monitoring system is a mixture of hardware and software additives. The hardware part includes embedded systems and software program is the Arduino ide.The Arduino ide displays readings from sensors are inserted using the hardware.The special sensors used are temperature and humidity sensor,pir sensor and soil moisture sensor. The facts gathered with the aid of the sensors is sent to the Arduino UNO microcontroller ATmega328.The gathered information may be displayed in a Arduino IDE. A GSM module is hooked up with the Arduino to facilitate messaging service which updates the farmers each 10 seconds approximately the climate conditions of the subject. IV.HARDWARE USED This project is aided with many hardwares. This proposed technology is an amalgamation of different sensors, microcontroller and communication medium to help the farmers to work on their farms.
      </Description>
      <Link href="https://www.ijrte.org/wp-content/uploads/papers/v8i4/D8806118419.pdf" onClick={(e) => e.preventDefault()}>View Publication</Link>
    </ResearchCard>

  </Wrapper>
);

export default ResearchContent;
