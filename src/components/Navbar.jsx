import React, { useState } from "react";
import { NavbarLinks } from "./";
import menu from "../assets/bars-solid.svg";
import xmark from "../assets/xmark-solid.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      {!toggleMenu ? (
        <div className="navbar__wrapper">
          <div className="navbar__wrapper-logo">
            <a href="#">GPT-3</a>
          </div>
          <div className="navbar__wrapper-links">
            <NavbarLinks />
          </div>
          <div className="navbar__wrapper-loggin_buttons">
            <a href="#">Sing in</a>
            <button>Sign up</button>
          </div>
          <img src={menu} alt="menu" onClick={() => setToggleMenu(true)} />
        </div>
      ) : (
        <div className="navbar__wrapper">
          <div className="navbar__wrapper-logo">
            <a href="#">GPT-3</a>
          </div>
          <div className="navbar__wrapper-loggin_buttons">
            <a href="#">Sing in</a>
            <button>Sign up</button>
          </div>
          <div className="navbar__wrapper-links_mobile">
            <img
              src={xmark}
              alt="xmark"
              className="closeIcon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="navbar__links-mobile">
              <NavbarLinks />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
