import React from "react";

const Gpt3Card = ({ title, description }) => {
  return (
    <div className="Gpt3Card">
      <div className="Gpt3Card__title">
        <div className="Gpt3Card__upperline"></div>
        <div className="Gpt3Card__title">{title}</div>
      </div>
      <div className="Gpt3Card__description">{description}</div>
    </div>
  );
};

export default Gpt3Card;
