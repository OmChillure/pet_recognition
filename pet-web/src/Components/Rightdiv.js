import React from "react";
import Dog from "../Assets/back.png";
import Style from "../Stylesheets/Rightdiv.module.css";

const Rightdiv = () => {
  return (
    <main>
      <div className={Style.Rightdiv}>
        <div className={Style.outerCircle}>
          <div className={Style.innerCircle}>
            <img className={Style.dog} src={Dog} alt="Dog image"></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rightdiv;
