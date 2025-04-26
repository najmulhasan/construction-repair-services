import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to previous page in history
  };

  return (
    <button
      className="back-button"
      onClick={goBack}
      aria-label="Go back to previous page"
    >
      ← Back
    </button>
  );
};

export default BackButton;
