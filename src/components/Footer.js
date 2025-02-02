import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="mt-2">
        <a href="https://github.com/yourprofile" className="mx-2 text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" className="mx-2 text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@example.com" className="mx-2 text-blue-400">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
