import React from "react";
import { Gpt3Card } from "../components";
import FeatureDatas from "../utils/Datas";
const Features = () => {
  return (
    <div className="features">
      <div className="features__wrapper-left">
        <h2>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features__wrapper-right">
        <div className="features__wrapper-right__items">
          {FeatureDatas.map((data, index) => (
            <Gpt3Card
              key={index}
              title={data.title}
              description={data.decription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
