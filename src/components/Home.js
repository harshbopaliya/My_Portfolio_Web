import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {
  return (
    <div className="home-container text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover my projects, skills, and experience. Let's build something great together!
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/projects">
          <Button text="View Projects" />
        </Link>
        <Link to="/contact">
          <Button text="Contact Me" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
