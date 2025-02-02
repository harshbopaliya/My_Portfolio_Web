import React from 'react';

const About = () => {
  return (
    <div className="about-container p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-6">
        I am a passionate software developer with expertise in web development, machine learning, and data analytics. 
        I enjoy building applications that solve real-world problems and continuously learning new technologies.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Skills & Technologies</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>JavaScript (React, Node.js)</li>
        <li>Python (Pandas, NumPy, Scikit-Learn)</li>
        <li>SQL & Power BI</li>
        <li>Machine Learning & Deep Learning</li>
        <li>Cloud Computing (AWS)</li>
      </ul>
    </div>
  );
};

export default About;