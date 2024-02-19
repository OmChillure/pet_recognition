import React, { useState } from 'react';
import Style from "../Stylesheets/Mini.module.css";
// import dog_print from "../Assets/dog_print.jpeg";
// import cat_print from "../Assets/cat_print.png";
// import rabbit_print from "../Assets/rabbit_print.png";
import petImage from "../Assets/white_paw.png";

function Games() {
  const [result, setResult] = useState("");

  const checkAnswer = (option) => {
    if (option === '2') {
      setResult("Correct! You guessed the shadow correctly!");
    } else {
      setResult("Incorrect! Try again.");
    }
  };

  return (
    <>
      <h2 className={Style.h2}>Guess The Paw Print</h2>
      <div className={Style.game_container}>
        <div className={Style.image_container}>
          <div className={Style.shadow}></div>
        </div>
          <img className={Style.img} src={petImage} alt="Pet" />
        <div className={Style.options}>
          <div className={Style.option} onClick={() => checkAnswer('1')}>Cat's Paw</div>
          <div className={Style.option} onClick={() => checkAnswer('2')}>Dog's Paw</div>
          <div className={Style.option} onClick={() => checkAnswer('3')}>Rabbit's Paw</div>

          <div className={Style.result}>{result}</div>
        </div>
      </div>
    </>
  );
}

export default Games;
