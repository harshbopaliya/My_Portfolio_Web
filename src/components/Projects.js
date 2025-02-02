import React from 'react';
import Card from './Card';

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
  }
];

const Projects = () => {
  return (
    <div className="projects-container p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
