import React from "react";
import ai from "../assets/ai.png";
import people from "../assets/people (1).png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__description">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__description-search">
          <input type="text" />
          <button>Get Started</button>
        </div>
        <div className="header__description-img">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__img">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
