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
  padding-left: 16px;
  background: rgba(0, 102, 255, 0.05);
  padding: 12px 16px;
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
  color: ${theme.colors.text.primary};
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

const ProjectsContent = () => (
  <Wrapper>
    <SectionTitle>Featured Projects</SectionTitle>

      <ProjectCard>
      <ProjectTitle>Multi agent reinforcement learning for dynamic pricing.</ProjectTitle>
      <ProjectMeta>2025 • Multi Agent Reinforcement Learning</ProjectMeta>
      <Description>
        Optimizing dynamic pricing in applications like flight prices, carpooling prices, product pricing in e-commerce, ticketing in sports/events etc.
      </Description>
      <TechStack>Tech Stack: Multi Agent AI, Python, Reinforcement Learning, LLM, Huggingface</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/Multi-agent-RL-for-dynamic-pricing." target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>

      <ProjectCard>
      <ProjectTitle>Multi RAG based Named Entity Recognition on clinical data using LLM</ProjectTitle>
      <ProjectMeta>2025 • Natural Language Processing on medical data</ProjectMeta>
      <Description>
        Utilizing a multi RAG based framework for indetification of entities from clinical data. This multi RAG based application uses LLM for classification and chain of thought as prompting technique.
      </Description>
      <TechStack>Tech Stack: NLP, Python, RAH, LLM, Huggingface</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/named-entity-recognition" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>

        <ProjectCard>
      <ProjectTitle>AI agent for classification and scheduling customer support queries as tasks</ProjectTitle>
      <ProjectMeta>2025 • AI chat application</ProjectMeta>
      <Description>
        This application used a deep neural network for identification of the symantics of the support query and then uses langchain based AI agent for scheduling tasks for solving the support queries.
      </Description>
      <TechStack>Tech Stack: Keras, Python, FastAPI, Langchain, LLM</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/custsupport" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>

        <ProjectCard>
      <ProjectTitle>Deep Neural Network for identification of construction defects</ProjectTitle>
      <ProjectMeta>2025 • Deep Learning Application</ProjectMeta>
      <Description>
        A deep neural network which can be employed as a service through an API. The model detects defects during coonstruction.
      </Description>
      <TechStack>Tech Stack: Tensorflow, Keras, FastAPI, Python</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/construction-defects" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Housing Price Prediction using Ensemble Regression and Hyperparameter Optimization
</ProjectTitle>
      <ProjectMeta>2025 • Machine Learning</ProjectMeta>
      <Description>
        Built an end-to-end machine learning pipeline for housing price prediction, incorporating data cleaning,
outlier handling, scaling, feature selection, ensemble modeling, cross-validation, and hyperparameter
tuning—boosting model R² score from 0.67 to 0.90.
      </Description>
      <TechStack>Tech Stack: Python, Scikit-Learn, Machine Learning</TechStack>
      <LinksContainer>
        <Link href="https://predictprice-9qtr.onrender.com/" target="_blank" rel="noopener noreferrer">View Live Demo</Link>
        <Link href="https://github.com/apoorvtripathi1999/housingprice" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Machine Learning Microservice for Customer Churn Probability Estimation</ProjectTitle>
      <ProjectMeta>2025 • Machine Learning Microservice</ProjectMeta>
      <Description>
        Developed a machine learning microservice to predict customer churn probabilities, exposing model
outputs via REST APIs for seamless integration with client applications and proactive retention
strategies.
      </Description>
      <TechStack>Tech Stack: Python, Machine Learning, Pydantic, FastAPI</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/customerchurnpreddiction" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Real-Time Analytics Dashboard in Power BI for Sales, Inventory, and
Marketing
</ProjectTitle>
      <ProjectMeta>2024 • Data Visualization</ProjectMeta>
      <Description>
       Developed an interactive Power BI dashboard to monitor sales, inventory, and marketing metrics in real
time, enabling data-driven decision-making and improved business visibility.
      </Description>
      <TechStack>Tech Stack: MySQL Sever, PowerBI</TechStack>
      <LinksContainer>
        <Link href="https://github.com/apoorvtripathi1999/bi_reports/blob/main/doordash.pdf" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
    
    <ProjectCard>
      <ProjectTitle>Streamlit Web Application for Iris Species Prediction
</ProjectTitle>
      <ProjectMeta>2024 • Machine Learning Application</ProjectMeta>
      <Description>
        Built an interactive web application using Streamlit that leverages a machine learning model to classify
iris species, providing a user-friendly interface for real-time predictions.
      </Description>
      <TechStack>Tech Stack: Python, Machine Learning Techniques, Streamlit</TechStack>
      <LinksContainer>
        <Link href="https://iris-classification-v4hjbnlnwm2noqhedlxbjr.streamlit.app/" target="_blank" rel="noopener noreferrer">App Store</Link>
        <Link href="https://github.com/apoorvtripathi1999/iris-classification" target="_blank" rel="noopener noreferrer">GitHub Repository</Link>
      </LinksContainer>
    </ProjectCard>
  </Wrapper>
);

export default ProjectsContent;
