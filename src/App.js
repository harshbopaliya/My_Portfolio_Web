import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/styles/app.css";

const App = () => {
  return (
    <Router>
      {/* <div className="min-h-screen bg-gray-100 text-gray-900"> */}
      {/* <nav className="p-4 bg-blue-600 text-white flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div>
            <Link className="mx-2" to="/">
              Home
            </Link>
            <Link className="mx-2" to="/about">
              About
            </Link>
            <Link className="mx-2" to="/projects">
              Projects
            </Link>
            <Link className="mx-2" to="/contact">
              Contact
            </Link>
          </div>
        </nav> */}
      {/* <div className="p-6"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* </div> */}
      {/* </div> */}
    </Router>
  );
};

export default App;
