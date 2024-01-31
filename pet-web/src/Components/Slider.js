import React from "react";
import ReactCardSlider from "react-card-slider-component";
import Style from "../Stylesheets/Box.module.css";

const sliderClick = () => {
  // Implement your click event logic here
  console.log("Slider clicked");
};

const slides = [
  {
    image: "../Assets/petsworld.jpg",
    title: "Pet's world ",
    description: "Expert Staff having the knowledge and expertise in assisting customers with pet care advice, nutrition, and choosing the right products.",
    titleStyle: Style.slideTitle,
    descriptionStyle: Style.slideDescription, 
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/600/500",
    title: "The pet's park ",
    description: "The extensive selection of pet supplies, including food, toys, cages, bedding, and other accessories to meet the needs of different pets are available here .",
    titleStyle: Style.slideTitle,
    descriptionStyle: Style.slideDescription,  
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/700/600",
    title: "The pet's station",
    description: "We ensure the health and well-being of the pets, such as regular check-ups, vaccinations, and a clean, sanitized environment.",
    titleStyle: Style.slideTitle,
    descriptionStyle: Style.slideDescription,  
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description",
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/200/300",
    title: "This is a fifth title",
    description: "This is a fifth description",
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description",
    clickEvent: sliderClick,
  },
  {
    image: "https://picsum.photos/300/400",
    title: "This is a seventh title",
    description: "This is a seventh description",
    clickEvent: sliderClick,
  },
];

function Slider() {
  return (
    <div className={Style.Slider} style={{ marginTop: "5em" }}>
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default Slider;
