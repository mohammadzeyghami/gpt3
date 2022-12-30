import React from "react";
import { FooterLinks } from "../components";
const Footrer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <h2>Do you want to step in to the future before others</h2>
      </div>
      <p className="footer__button">Request Early Access</p>
      <div className="footer__links">
        <div className="footer__links-title">
          <h5>GPT-5</h5>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer__link-wrapper">
          <FooterLinks
            span="Links"
            link1="Overons"
            link2="Social Media"
            link3="Counters"
            link4="Contact"
          />
        </div>
        <div className="footer__link-wrapper">
          <FooterLinks
            span="Company"
            link1="Terms & Conditions"
            link2="Privacy Policy"
            link3="Gilroy-Medium"
            link4=""
          />
        </div>
        <div className="footer__link-wrapper">
          <FooterLinks
            span="Get in touch"
            link1="mohammad zeyghami"
            link2="+98-09189563646"
            link3="mohammadzeighami192@g"
          />
        </div>
      </div>
    </div>
  );
};

export default Footrer;
