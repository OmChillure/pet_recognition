import React from "react";
import Style from "../Stylesheets/Abouts.module.css";
import img1 from "../Assets/kshirin.jpeg";
import img2 from "../Assets/sakshi.jpeg";
import img3 from "../Assets/om.jpeg";

function Abouts() {
  return (
    <>
      <header className={Style.header}>
        <h1 className={Style.head}>Welcome To Paw Print</h1>
      </header>

    <div className={Style.aboutCont}>
      <h3>What We Do !!</h3>

        <p>Explore our website to discover information about various pets. Whether you are a pet owner, enthusiast, or researcher, we've got you covered. Use our advanced recognition technology to identify and learn more about your favorite furry companions. Check out our comprehensive database and stay informed about the latest trends in the world of pets. We are dedicated to providing a user-friendly and informative platform for all pet lovers.</p>

    <p>
        <div className={Style.infoPara}>
            <strong>1. Image Upload and Processing:</strong>
            <ul>
                <li>Allow users to upload images of their pets through a user-friendly interface.</li>
                <li>Process uploaded images using image recognition algorithms to identify the type of pet and possibly its breed.</li>
            </ul>
        </div>

        <div>
            <strong>2. Accurate Pet Identification:</strong>
            <ul>
                <li>Utilize advanced image recognition technology to accurately identify different types of pets, including dogs, cats, birds, etc.</li>
                <li>Provide accurate identification results with high confidence levels.</li>
            </ul>
        </div>

        <div>
            <strong>3. Educational Content:</strong>
            <ul>
                <li>Offer educational resources on pet care, behavior, and health to enhance the user experience.</li>
            </ul>
        </div>

        <div>
            <strong>4. Location of different shops in Nagpur:</strong>
            <ul>
                <li>Provides different locations of shops which will help you in taking care of your pet.</li>
            </ul>
        </div>
    </p>

    <p className={Style.strong}>
        <strong>This website has been engineered through the implementation of:</strong>
        <ul>
            <li>React.js</li>
            <li>Flask (backend)</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Open CV</li>
        </ul>
    </p>

    <p className={Style.lastpara}>Start your journey with us and embrace the world of pet recognition!</p>
    </div>

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
    </>
  );
}

export default Abouts;
