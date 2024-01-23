import React from "react";
import Style from "../Stylesheets/Abouts.module.css";
import img1 from "../Assets/kshirin.jpeg";
import img2 from "../Assets/sakshi.jpeg";
import img3 from "../Assets/om.jpeg";

function Abouts() {
  return (
    <>
      <header className={Style.header}>
        <h1 className={Style.head}>About Us</h1>
      </header>
      <h1>Welcome To Paw Prints</h1>
      <main>
        <p>
          Explore our website to discover information about various pet breeds.
          Whether you are a pet owner, enthusiast, or researcher, we've got you
          covered. Use our advanced recognition technology to identify and learn
          more about your favorite furry companions.
          Check out our comprehensive breed database and stay informed about the
          latest trends in the world of pets. We are dedicated to providing a
          user-friendly and informative platform for all pet lovers.
          Start your journey with us and embrace the world of pet breed
          recognition!
        </p>
        <h2>A Project By :-</h2>

        <section id={Style.whatWeDo}>
          <div className={Style.WeDoCards}>
            <div className={Style.cards}>
              <div className={Style.card}>
                <div className={Style.icon}>
                  <img className={Style.img2} src={img2} alt="" />
                </div>
                <div className={Style.name}>Sakshii</div>
                <div className={Style.description}>
                  UI / UX Designer , Frontend Developer
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.icon}>
                  <img className={Style.img3} src={img3} alt="" />
                </div>
                <div className={Style.name}>Om </div>
                <div className={Style.description}>
                  Machine Learning , Computer Vison Frontend Dev [React.JS]
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.icon}>
                  <img className={Style.img1} src={img1} alt="" />
                </div>

                <div className={Style.name}>Kshirin</div>
                <div className={Style.description}>
                  UI / UX Designer , Frontend Developer
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={Style.footer}>
          <p>&copy; 2024 Pet Breed Recognition. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default Abouts;
