import React from "react";
import Dog from "../Assets/back.png";
import Style from "../Stylesheets/Rightdiv.module.css"

const Rightdiv = () => {
  return (
    <>
    <div className={Style.cont}>
    <main>
      <div className={Style.Rightdiv}>
        <div className={Style.outerCircle}>
          <div className={Style.innerCircle}>
            
          </div>
        </div>
      </div>
    </main>
    </div>
      <img className={Style.dog} src={Dog} alt="Dog image"></img>
    </>
  );
};

export default Rightdiv;
