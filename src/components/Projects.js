import React from 'react';
import Card from './Card';
import '../styles/project.css';


const projects = [
  {
    title: 'Credit Card Transaction Analysis',
    description: 'Analyzed credit card transactions using Power BI and SQL, uncovering patterns and anomalies.',
    link: '#'
  },
  {
    title: 'Sentiment Analysis on Amazon Food Reviews',
    description: 'Applied VADER and fine-tuned RoBERTa model for sentiment classification.',
    link: '#'
  },
  {
    title: 'Student Placement Predictor',
    description: 'Built a web service using logistic regression to predict student placements.',
    link: '#'
  },
  {
    title: 'SMSGuard API',
    description: 'Developed a spam detection API using Flask and Naive Bayes, classifying and filtering spam messages to enhance user security and experience.',
    link: '#'
  },
  {
    title: 'Real-Time Pizza Ordering Website',
    description: 'Built a real-time pizza ordering platform using the MERN stack providing real-time updates and notifications for users.',
    link: '#'
  },
  {
    title: 'Amazon Web Scraping',
    description: 'Created a web scraping tool to extract data from Amazon, enabling automated data collection for analysis and insights.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="projects-container p-8">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
