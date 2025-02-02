import React from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "../styles/home.css";
import myPhoto from "../assets/myPhoto.jpg"; // Add the correct path to your image
import resumePDF from "../assets/resume.pdf"; // Add the correct path to your resume PDF


const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Harsh_Bopaliya_Resume.pdf";
    link.click();
  };
  return (
    <div className="home-container flex items-center justify-between p-8">
      {/* Left Content */}
      <div className="text-left">
        <h1 className="text-4xl font-bold">Hello, it's me Harsh Bopaliya</h1>
        <h2 className="text-2xl text-gray-600">
          I'm a Python and AI/ML Developer
        </h2>
        <p className="mt-2 text-gray-600">
          I am a Python and math lover, passionate about creating AI models.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/harshbopaliya2003/"
            className="text-blue-700 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/BopaliyaHarsh"
            className="text-gray-800 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/harshbopaliya"
            className="text-gray-800 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/harsh_bopaliya_13/"
            className="text-pink-500 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:bopaliyaharsh7@gmail.com"
            className="text-gray-800 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <button 
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>


      {/* Right Image */}
      <div>
        <img
          src={myPhoto}
          alt="Harsh Bopaliya"
          className="w-64 h-64 rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
