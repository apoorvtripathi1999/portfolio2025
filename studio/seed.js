/**
 * Sanity Content Seed Script
 * ===========================
 * Populates your Sanity dataset with Apoorv's existing portfolio data.
 *
 * Usage (after setting up Sanity):
 *   cd studio
 *   npm install
 *   node seed.js
 *
 * Requirements:
 *   - SANITY_PROJECT_ID env var set, OR edit the projectId below
 *   - SANITY_TOKEN env var set (create a write token in sanity.io → project → API → Tokens)
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // write token required for mutations
  useCdn: false,
});

// ============================================================
// SEED DATA (copied from current hardcoded components)
// ============================================================

const about = {
  _type: 'about',
  _id: 'about-singleton',
  bioText: `Data Science Intern currently persuing a Master's student in Computer Science at Florida Atlantic University GPA: 3.7/4.0, with a Bachelor's in Information Technology from SRM Institute GPA: 6.8/10. With hands-on experience in machine learning, AI, and data infrastructure, including leading data projects at Kahani and prior roles in operations and program management, where I improved workflows, NPS scores, and team efficiency. My projects include ML microservices for churn prediction using FastAPI/REST APIs, ensemble regression for housing prices, Power BI dashboards for real-time analytics, and Streamlit apps for predictions. Skilled in Python, SQL, sklearn, NLP, LLMs, HuggingFace, Langchain, AWS, Docker, Git, and data visualization, with strong communication and stakeholder management abilities.`,
};

const workExperiences = [
  {
    _type: 'workExperience',
    jobTitle: 'Lead QA/DataScience Intern',
    company: 'Kahani',
    location: 'Wilmington, DE, Remote',
    startDate: 'OCT 2025',
    isCurrent: true,
    description: 'QA and Data Science intern, working on setting up the data infrastructure for early stage startup.',
    bullets: [
      "Design and implement Kahani's data infrastructure for Pilot 2 and beyond working on event tracking, schema design, pipelines with Firebase, Pub/Sub, BigQuery, dashboards.",
      'Define and monitor core product metrics like engagement, retention, symptom improvement to evaluate product-market fit.',
    ],
    order: 1,
  },
  {
    _type: 'workExperience',
    jobTitle: 'Product Operations Manager',
    company: 'Allen Digital Private Limited',
    location: 'Bengaluru, India',
    startDate: 'JAN 2024',
    endDate: 'JUN 2024',
    isCurrent: false,
    description: 'Worked alongside the product and tech teams to manage and own product development cycles and feature adherence.',
    bullets: [
      'Improved the non-tech queries turn around time to an average of 2 days from a week through constant monitoring and maintaining the issue tracking analytics.',
      'Managed operations for 1000+ cohorts, ensuring regular metrics adharence and proper documentation.',
    ],
    order: 2,
  },
  {
    _type: 'workExperience',
    jobTitle: 'Program Manager',
    company: 'Heycoach',
    location: 'Bengaluru, India',
    startDate: 'APR 2023',
    endDate: 'DEC 2023',
    isCurrent: false,
    description: 'Program manager worked with teams on special projects for an early stage startup.',
    bullets: [
      'Led engagement initiatives, creating SOPs that enhanced cross-team communication.',
      'Set up and managed a B2B team onboarding 65+ high-value clients during the first month.',
      'Managed the development of a feature for the platform called DSA Visualizer.',
    ],
    order: 3,
  },
  {
    _type: 'workExperience',
    jobTitle: 'Operations Associate',
    company: 'Newton School',
    location: 'Bengaluru, India',
    startDate: 'Nov 2021',
    endDate: 'Mar 2023',
    isCurrent: false,
    description: 'Associate in operations management, worked with multiple teams for improving the operations efficiency for early-stage startup.',
    bullets: [
      'Prepared students for job interviews through analytics and other resources, resulting in 600+ conversions during the year 2020 to 2021.',
      'Boosted student experience scores (NPS) by 40% through process improvements and feedback analysis.',
      'Managed a team of support associates improving student outreach to around 90%.',
    ],
    order: 4,
  },
];

const projects = [
  {
    _type: 'project',
    title: 'Multi agent reinforcement learning for dynamic pricing.',
    year: 2025,
    category: 'Multi Agent Reinforcement Learning',
    description: 'Optimizing dynamic pricing in applications like flight prices, carpooling prices, product pricing in e-commerce, ticketing in sports/events etc.',
    techStack: ['Multi Agent AI', 'Python', 'Reinforcement Learning', 'LLM', 'Huggingface'],
    githubUrl: 'https://github.com/apoorvtripathi1999/Multi-agent-RL-for-dynamic-pricing.',
    order: 1,
  },
  {
    _type: 'project',
    title: 'Multi RAG based Named Entity Recognition on clinical data using LLM',
    year: 2025,
    category: 'Natural Language Processing on medical data',
    description: 'Utilizing a multi RAG based framework for indetification of entities from clinical data. This multi RAG based application uses LLM for classification and chain of thought as prompting technique.',
    techStack: ['NLP', 'Python', 'RAG', 'LLM', 'Huggingface'],
    githubUrl: 'https://github.com/apoorvtripathi1999/named-entity-recognition',
    order: 2,
  },
  {
    _type: 'project',
    title: 'AI agent for classification and scheduling customer support queries as tasks',
    year: 2025,
    category: 'AI chat application',
    description: 'This application used a deep neural network for identification of the symantics of the support query and then uses langchain based AI agent for scheduling tasks for solving the support queries.',
    techStack: ['Keras', 'Python', 'FastAPI', 'Langchain', 'LLM'],
    githubUrl: 'https://github.com/apoorvtripathi1999/custsupport',
    order: 3,
  },
  {
    _type: 'project',
    title: 'Deep Neural Network for identification of construction defects',
    year: 2025,
    category: 'Deep Learning Application',
    description: 'A deep neural network which can be employed as a service through an API. The model detects defects during construction.',
    techStack: ['Tensorflow', 'Keras', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/apoorvtripathi1999/construction-defects',
    order: 4,
  },
  {
    _type: 'project',
    title: 'Housing Price Prediction using Ensemble Regression and Hyperparameter Optimization',
    year: 2025,
    category: 'Machine Learning',
    description: 'Built an end-to-end machine learning pipeline for housing price prediction, incorporating data cleaning, outlier handling, scaling, feature selection, ensemble modeling, cross-validation, and hyperparameter tuning—boosting model R² score from 0.67 to 0.90.',
    techStack: ['Python', 'Scikit-Learn', 'Machine Learning'],
    githubUrl: 'https://github.com/apoorvtripathi1999/housingprice',
    liveUrl: 'https://predictprice-9qtr.onrender.com/',
    order: 5,
  },
  {
    _type: 'project',
    title: 'Machine Learning Microservice for Customer Churn Probability Estimation',
    year: 2025,
    category: 'Machine Learning Microservice',
    description: 'Developed a machine learning microservice to predict customer churn probabilities, exposing model outputs via REST APIs for seamless integration with client applications and proactive retention strategies.',
    techStack: ['Python', 'Machine Learning', 'Pydantic', 'FastAPI'],
    githubUrl: 'https://github.com/apoorvtripathi1999/customerchurnpreddiction',
    order: 6,
  },
  {
    _type: 'project',
    title: 'Real-Time Analytics Dashboard in Power BI for Sales, Inventory, and Marketing',
    year: 2024,
    category: 'Data Visualization',
    description: 'Developed an interactive Power BI dashboard to monitor sales, inventory, and marketing metrics in real time, enabling data-driven decision-making and improved business visibility.',
    techStack: ['MySQL Server', 'PowerBI'],
    githubUrl: 'https://github.com/apoorvtripathi1999/bi_reports/blob/main/doordash.pdf',
    order: 7,
  },
  {
    _type: 'project',
    title: 'Streamlit Web Application for Iris Species Prediction',
    year: 2024,
    category: 'Machine Learning Application',
    description: 'Built an interactive web application using Streamlit that leverages a machine learning model to classify iris species, providing a user-friendly interface for real-time predictions.',
    techStack: ['Python', 'Machine Learning Techniques', 'Streamlit'],
    githubUrl: 'https://github.com/apoorvtripathi1999/iris-classification',
    liveUrl: 'https://iris-classification-v4hjbnlnwm2noqhedlxbjr.streamlit.app/',
    order: 8,
  },
];

const articles = [
  {
    _type: 'article',
    title: 'Does non repetitive code really translates to better performance?',
    publishDate: 'July 2025',
    readTime: 10,
    description: 'We do not have to blindly follow the principles of clean code, as they are suggestions and best practices and does not define the overall context of code. But we should also not ignore the requirement and need for maintainability. We should design better code structure which can work with both performance and maintainability.',
    url: 'https://dev.to/apoorvtripathi1999',
    order: 1,
  },
  {
    _type: 'article',
    title: 'From Research to Production: How I Built a Customer Churn Prediction API That Actually Works',
    publishDate: 'July 2025',
    readTime: 5,
    description: 'Ever wondered how to bridge the gap between your ML experiments and real-world applications? I used to spend days, perfecting machine learning models, only to face the harsh reality that production deployment is a completely different beast.',
    url: 'https://dev.to/apoorvtripathi1999/from-research-to-production-how-i-built-a-customer-churn-prediction-api-that-actually-works-5gdg',
    order: 2,
  },
  {
    _type: 'article',
    title: 'Custom Transformers Are the Secret to Making ML Pipelines Work in Practice',
    publishDate: 'July 2025',
    readTime: 10,
    description: "Custom transformers aren't just about code organization—they're about embedding domain knowledge into your ML workflow.",
    url: 'https://dev.to/apoorvtripathi1999/custom-transformers-are-the-secret-to-making-ml-pipelines-work-in-practice-i14',
    order: 3,
  },
  {
    _type: 'article',
    title: 'The Class Imbalance Problem: How I Achieved 89% Accuracy on Customer Churn Prediction',
    publishDate: 'July 2025',
    readTime: 6,
    description: "Class imbalance doesn't have to be a death sentence for your ML models. Sometimes the best solution is the simplest: carefully balance your data and let the algorithms do what they do best. In my case, this approach led to an 89% accuracy rate that would have been impossible with the original imbalanced dataset.",
    url: 'https://dev.to/apoorvtripathi1999/the-class-imbalance-problem-how-i-achieved-89-accuracy-on-customer-churn-prediction-4chg',
    order: 4,
  },
  {
    _type: 'article',
    title: "API Design That Doesn't Break: How Pydantic Saved My API",
    publishDate: 'July 2025',
    readTime: 5,
    description: "Good API design isn't about flashy features—it's about handling edge cases gracefully and making failure modes predictable.",
    url: 'https://dev.to/apoorvtripathi1999/api-design-that-doesnt-break-how-pydantic-saved-my-api-dkp',
    order: 5,
  },
];

const research = [
  {
    _type: 'research',
    title: 'Multi Agent Reinforcement learning application in constrained supply chains for dynamic pricing.',
    description: 'This research aims to optimize dynamic pricing in applications like flight prices, carpooling prices, product pricing in e-commerce, ticketing in sports/events etc. This research can also be considered as a study of making automated supply chain decisions and can ultimately influence how decisions are going to be made in automated manufacturing supply chains.',
    status: 'in-progress',
    order: 1,
  },
  {
    _type: 'research',
    title: 'Multi-RAG based Named entity recognition for clinical data',
    description: 'This research aims to improve medical Named Entity Recognition by enhancing an existing system that uses Large Language Models and Retrieval Augmented Generation. The study builds upon a foundational model that utilized Dictionary-Infused RAG for zero-shot entity identification using the UMLS database and KATE for one-shot classification. This new work introduces three key enhancements to make the system more reliable, dynamic, and cost-effective. First, it integrates advanced prompting techniques, such as chain of thought and meta prompting, with the existing TANL formatting to improve the LLM\'s output quality. Second, it adds caching techniques to the RAG system to store previously retrieved information, which significantly reduces the high computational costs and resource demands. Finally, it overcomes a major limitation of the original model by making the system more dynamic; it first classifies the type of entity e.g., gene, drug, chemical, and then queries a respective database like NCBI gene for genes, to retrieve more accurate context, moving beyond the original\'s reliance on only UMLS.',
    status: 'in-progress',
    order: 2,
  },
  {
    _type: 'research',
    title: 'IoT Based Smart Farm Monitoring System',
    description: 'The farm monitoring system is a mixture of hardware and software additives. The hardware part includes embedded systems and software program is the Arduino ide. The Arduino ide displays readings from sensors are inserted using the hardware. The special sensors used are temperature and humidity sensor, pir sensor and soil moisture sensor.',
    publicationUrl: 'https://www.ijrte.org/wp-content/uploads/papers/v8i4/D8806118419.pdf',
    status: 'published',
    order: 3,
  },
];

const education = [
  {
    _type: 'education',
    degree: 'Master of Science in Computer Science',
    institution: 'Florida Atlantic University',
    startYear: '2024',
    endYear: '2026',
    gpa: '3.78/4.0',
    description: 'Specialized in Artificial Intelligence and Machine Learning with focus on Machine Learning applications.',
    highlights: [
      'Thesis: "Multi-RAG based Named Entity Recognition on clinical data using Large Language Models"',
      'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Data Science, Artificial Intelligence, Deep Learning, Generative AI, Database Management',
    ],
    isCertification: false,
    order: 1,
  },
  {
    _type: 'education',
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'SRM University',
    startYear: '2017',
    endYear: '2021',
    gpa: '2.72/4.0',
    description: 'Comprehensive program covering computer science fundaments, system design and architecture.',
    highlights: [
      'Senior Project: "Farm monitoring system using arduino based IOT"',
    ],
    isCertification: false,
    order: 2,
  },
  {
    _type: 'education',
    degree: 'Certifications',
    highlights: [
      'Codepath Intro to technical interview prep (2025)',
    ],
    isCertification: true,
    order: 3,
  },
];

const technologies = [
  {
    _type: 'technology',
    categoryName: 'Programming Languages, Frameworks & DevOps',
    color: 'neonGreen',
    items: ['Python', 'SQL', 'FastAPI', 'Pydantic', 'Docker', 'Git', 'Cursor AI'],
    order: 1,
  },
  {
    _type: 'technology',
    categoryName: 'Machine Learning & AI Technologies',
    color: 'electricBlue',
    items: ['Scikit learn', 'Tensorflow', 'Keras', 'Huggingface', 'Langchain', 'Natural Language Processing', 'Large Language Models', 'Deep Neural Network', 'Model Context Protocol'],
    order: 2,
  },
  {
    _type: 'technology',
    categoryName: 'Data Analytics & Visualization',
    color: 'toxicPurple',
    items: ['Power BI', 'MS Excel', 'Pandas and Numpy', 'Matplotlib', 'Google Big Query'],
    order: 3,
  },
];

const musicPlaylists = [
  {
    _type: 'musicPlaylist',
    title: 'Roadtrip Time Travel',
    platform: 'YouTube Music',
    mood: 'Adventure Vibes',
    description: 'Perfect soundtrack for long drives and road adventures. A nostalgic journey through time with tracks that make every mile memorable.',
    url: 'https://music.youtube.com/playlist?list=PLkhE-imQU2aLDci76TVw-ekGAsKqIrNhy&si=QcTt_V_aqHTbsomG',
    order: 1,
  },
  {
    _type: 'musicPlaylist',
    title: 'Rock Anthems',
    platform: 'YouTube Music',
    mood: 'High Energy',
    description: 'Epic rock classics and modern anthems that pump you up. From legendary guitar solos to powerful vocals that never get old.',
    url: 'https://music.youtube.com/playlist?list=PLkhE-imQU2aL5OyFSS78H0dGl70X9J1M0&si=Kc4LGL6cedEbU9q6',
    order: 2,
  },
  {
    _type: 'musicPlaylist',
    title: "Bollywood I Listen To When I'm Free",
    platform: 'YouTube Music',
    mood: 'Chill Bollywood',
    description: 'My go-to Bollywood collection for relaxation and leisure time. A mix of soulful melodies, upbeat numbers, and timeless classics.',
    url: 'https://music.youtube.com/playlist?list=PLkhE-imQU2aJBE4t_fA39RauhRElKaoBW&si=cN-HS9ynu61jZE4c',
    order: 3,
  },
  {
    _type: 'musicPlaylist',
    title: 'Reggae',
    platform: 'YouTube',
    mood: 'Island Vibes',
    description: 'Laid-back reggae rhythms and island vibes to relax and unwind. Smooth grooves and positive energy from the Caribbean music tradition.',
    url: 'https://youtube.com/playlist?list=PLkhE-imQU2aJ4FJrr-SyVS3IoJ0fPPxwF&si=7m8H9pkLhUUIBEkc',
    order: 4,
  },
];

// ============================================================
// SEED RUNNER
// ============================================================

async function seed() {
  console.log('🌱 Starting Sanity seed...\n');

  const allDocuments = [
    about,
    ...workExperiences,
    ...projects,
    ...articles,
    ...research,
    ...education,
    ...technologies,
    ...musicPlaylists,
  ];

  let created = 0;
  let failed = 0;

  for (const doc of allDocuments) {
    try {
      // Use createOrReplace so re-running the script is idempotent
      if (doc._id) {
        await client.createOrReplace(doc);
      } else {
        await client.create(doc);
      }
      console.log(`  ✓ ${doc._type}: ${doc.jobTitle || doc.title || doc.degree || doc.categoryName || doc.bioText?.slice(0, 40) || doc._id || '...'}`);
      created++;
    } catch (err) {
      console.error(`  ✕ Failed ${doc._type}:`, err.message);
      failed++;
    }
  }

  console.log(`\n✅ Seed complete: ${created} created, ${failed} failed`);
  if (failed > 0) {
    console.log('\n💡 Tip: Make sure SANITY_TOKEN is set to a write-enabled token from sanity.io');
  }
}

seed().catch(console.error);
