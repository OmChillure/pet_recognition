import React from "react";
import Style from "../Stylesheets/Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <header className={Style.headContent}>
      <div className={Style.logoCont}>
        <div className={Style.logo}>
          <img src={logo} alt="Web Logo" />
        </div>
      </div>
      <nav>
        <ul className={Style.list}>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/shops"}>Shops</Link></li> {/* Corrected path to "/shops" */}
          <li><Link to={"/recognizer"}>Recognizer</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
      <div className={Style.buttons}>
        <button className={Style.signIn}>Sign In</button>
        <button className={Style.signUp}>Sign Up</button>
      </div>
      {/* Add your ham component here, assuming it is correctly implemented */}
    </header>
  );
};

export default Navbar;
