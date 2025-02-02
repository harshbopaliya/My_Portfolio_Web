import React from "react";
import "../styles/button.css";
const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
      {text}
    </button>
  );
};

export default Button;
