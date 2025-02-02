import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container p-8">
      <h1 className="section-title">About Me</h1>
      <p className="about-description">
        I am a passionate software developer with expertise in web development, machine learning, and data analytics. 
        I enjoy building applications that solve real-world problems and continuously learning new technologies.
      </p>
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <ul className="skills-list">
          <li>JavaScript (React, Node.js)</li>
          <li>Python (Pandas, NumPy, Scikit-Learn)</li>
          <li>SQL & Power BI</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Cloud Computing (AWS)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
