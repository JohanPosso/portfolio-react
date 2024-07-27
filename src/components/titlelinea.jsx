import React from "react";

const TitleWithLines = ({ title }) => {
  return (
    <div className="title-container">
      <div className="line"></div>
      <h2 className="title">{title}</h2>
      <div className="line"></div>
    </div>
  );
};

export default TitleWithLines;
