import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="animated-wrench">
        <div className="wrench-head"></div>
        <div className="wrench-handle"></div>
      </div>
      <h1 className="not-found-title">Oops! Page Not Found</h1>
      <p className="not-found-message">
        This page is currently under development. Please check back later!
      </p>
      <a href="/" className="back-home-button">
        Back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
