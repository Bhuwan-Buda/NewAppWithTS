import React from "react";
import "./error.css";

const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might be removed or temporarily unavailable
      </p>
      <button>GOTO HOMEPAGE</button>
    </div>
  );
};

export default ErrorPage;
