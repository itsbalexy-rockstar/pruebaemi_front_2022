import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-balls">
        <div className="loader-ball"></div>
        <div className="loader-ball"></div>
        <div className="loader-ball"></div>
      </div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
