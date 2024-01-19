import React from "react";
import logo from "../Assets/logo.png";
import Style from "../Stylesheets/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className={Style.head}>
        <div className={Style.logoCont}>
          <div className={Style.logo}>
            <img src={logo} alt="Web Logo" />
          </div>
        </div>
        <nav>
          <ul className={Style.list}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop's</a>
            </li>
            <li>
              <a href="">Recognizer</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>

        <div className={Style.buttons}>
          <button className={Style.signIn}>Sign In</button>

          <button className={Style.signUp}>Sign Up</button>
        </div>

        <ham />
      </div>
    </header>
  );
};

export default Navbar;
