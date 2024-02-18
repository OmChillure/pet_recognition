import React from 'react'
import Style from "../Stylesheets/Circleprop.module.css";
import Dog from "../Assets/dog.png";
import Cat from "../Assets/cat6.png";
import Rabbit from "../Assets/rabbit.png";

function Circleprop() {
  return (
    <>
    <div className={Style.img1}>
      <img className={Style.dog_img} src={Dog} alt=''></img>
    </div>

    <div className={Style.img2}>
      <img className={Style.cat_img} src={Cat} alt=''></img>
    </div>

    <div className={Style.img3}>
      <img className={Style.rabbit_img} src={Rabbit} alt=''></img>
    </div>
    </>
  )
}

export default Circleprop
