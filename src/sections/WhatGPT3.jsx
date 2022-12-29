import React from "react";
import { Gpt3Card } from "../components/";
const WhatGPT3 = () => {
  return (
    <div className="whatGpt-3">
      <div className="whatGpt-3_top">
        <div className="whatGpt-3-title">
          <div className="whatGpt-3-title__line"></div>
          <span>What is GPT-3</span>
        </div>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="whatGpt-3_mid">
        <h2>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>
      <div className="whatGpt-3_bottom">
        <Gpt3Card
          title="Chatbots"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Gpt3Card
          title="Knowledgebase"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Gpt3Card
          title="Education"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
