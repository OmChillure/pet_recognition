import React from "react";
import Style from "../Stylesheets/Navbar.module.css";
import style from "../Stylesheets/Profile.module.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import profile from "../Assets/temp.jpeg"
import scanner from "../Assets/cam.jpeg"
import { useState } from "react";


function Navbar() {
  
  const [isProfileOpen , setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen)
  }


  return (
    <header className={Style.headContent}>
      <div className={Style.logoCont}>
        <div className={Style.logo}>
          <img src={logo} alt="Web Logo" />
        </div>
      </div>
      <nav>
        <ul className={Style.list}>
          <li className={Style.homebtn}><Link to={"/"}>Home</Link></li>
          <li className={Style.shopbtn}><Link to={"/shops"}>Shops</Link></li> {/* Corrected path to "/shops" */}
          <li className={Style.gamebtn}><Link to={"/minigame"}> MiniGame</Link></li>
          <li className={Style.aboutbtn}><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
      <div className={Style.buttons}>
        <Link to={"/recognizer"}>
          <img className={Style.scanner} src={scanner} alt="Scanner element" />
        </Link>
        <div className={`${style.profile} ${isProfileOpen ? Style.open : ""}`} onClick={toggleProfileMenu}>
          <img src={profile} alt="Profile element" />
          {isProfileOpen && (
            <ul className={style.profileMenu}>
              <li>
                <Link to={"/signin"}>Sign In</Link>
              </li>
              
              <li>
                <Link to={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
