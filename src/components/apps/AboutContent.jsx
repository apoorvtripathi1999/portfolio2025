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

const AboutContent = () => (
  <Wrapper>
    <SectionTitle>About Me</SectionTitle>
    <Description>Data Science Intern currently persuing a Master's student in Computer Science at Florida Atlantic University GPA: 3.7/4.0, with a Bachelor's in Information Technology from SRM Institute GPA: 6.8/10. With hands-on experience in machine learning, AI, and data infrastructure, including leading data projects at Kahani and prior roles in operations and program management, where I improved workflows, NPS scores, and team efficiency. My projects include ML microservices for churn prediction using FastAPI/REST APIs, ensemble regression for housing prices, Power BI dashboards for real-time analytics, and Streamlit apps for predictions. Skilled in Python, SQL, sklearn, NLP, LLMs, HuggingFace, Langchain, AWS, Docker, Git, and data visualization, with strong communication and stakeholder management abilities.</Description>
  </Wrapper>
);

export default AboutContent;
