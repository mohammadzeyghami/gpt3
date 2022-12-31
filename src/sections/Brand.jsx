import React from "react";
import { shopify, slack, google, dropbox, atlassian } from "../assets";

const Brand = () => {
  return (
    <div className="brand" id="brand">
      <div className="brand__wrapper">
        <div className="brand__wrapper-icons">
          <img src={google} />
          <img src={slack} />
          <img src={atlassian} />
          <img src={dropbox} />
          <img src={shopify} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
