import React from "react";
import { shopify, slack, google, dropbox, atlassian } from "../assets";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__wrapper">
        <div className="brand__wrapper-icons">
          <img src={google} alt="" />
          <img src={slack} alt="" />
          <img src={atlassian} alt="" />
          <img src={dropbox} alt="" />
          <img src={shopify} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
