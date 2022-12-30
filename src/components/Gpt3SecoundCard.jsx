import React from "react";

const Gpt3SecoundCard = ({ imgUrl, date, text }) => (
  <div className="gpt3SecoundCard">
    <div className="gpt3SecoundCard-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3SecoundCard-content">
      <div>
        <p>{date}</p>
        <h3 className="gpt3SecoundCard-content_descpirtion">{text}</h3>
      </div>
      <p>mohammad</p>
    </div>
  </div>
);

export default Gpt3SecoundCard;
