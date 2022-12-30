import React from "react";

const FooterLinks = ({ span, link1, link2, link3, link4 }) => {
  return (
    <div className="footer__Links">
      <p>{span}</p>
      <a href="#">{link1}</a>
      <a href="#">{link2}</a>
      <a href="#">{link3}</a>
      <a href="#">{link4}</a>
    </div>
  );
};

export default FooterLinks;
