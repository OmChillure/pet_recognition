import React from 'react'
import Style from "../Stylesheets/Game_l.module.css"
import dog_print from "../Assets/dog_print.jpeg";
import cat_print from "../Assets/cat_print.png";
import rabbit_print from "../Assets/rabbit_print.png";

function Game_l() {
  return (
    <>
    <div className={Style.background}>
        <img src={dog_print} alt='element'></img>
    </div>

    <div className={Style.background}>
        <img src={cat_print} alt='element'></img>
    </div>

    <div className={Style.background}>
        <img src={rabbit_print} alt='element'></img>
    </div>
    </>
  )
}

export default Game_l
