import React from 'react';
import { Carousel } from 'primereact/carousel';
import style from "../Stylesheets/Slider.module.css"
import pets_world from "../Assets/pets_world.jpeg"
import pets_park from "../Assets/pets_park.webp"
import pets_at_home from "../Assets/pets_at_home.webp"
import pets_masster from "../Assets/pets_masster.jpg"
import pets_junction from "../Assets/pets_junction.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const YourComponent = () => {
  const products = [
    { id: 1, name: 'Pets world', image: pets_world, description: 'Expert Staff having the knowledge and expertise in assisting customers with pet care advice, nutrition, and choosing the right products.' },
    { id: 2, name: 'The pets park', image: pets_park , description: ' The extensive selection of pet supplies, including food, toys, cages, bedding, and other accessories to meet the needs of different pets are available here .' },
    { id: 3, name: 'Pets at Home', image: pets_at_home, description: 'We ensure the health and well-being of the pets, such as regular check-ups, vaccinations, and a clean, sanitized environment.' },
    { id: 4, name: 'Pets Junction', image: pets_junction, description: 'Pet variety : the diverse range of pets available such a dogs cats small animals birds reptiles and fish .The variety of pet supplies, food, toys, and accessories available in the store.' },
    { id: 5, name: 'Pets Master', image: pets_masster, description: 'We deal in pets and present our sincere eforts. Variety of animal supply and accessories dear to your pet are available ...' },
    // Add more products as needed
  ];

  const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];

  const productTemplate = (product) => (
    <div className={style.product_item}>
      <img src={product.image} alt={product.name}  className={style.product_image}/>
      <div className={style.product_name}>{product.name}</div>
      <p className={style.product_description}>{product.description}</p>
      <FontAwesomeIcon icon={faMapMarkerAlt} className={style.location_icon} />
    </div>
  );

  return (
    <Carousel
      value={products}
      numScroll={1}
      numVisible={3}
      responsiveOptions={responsiveOptions}
      itemTemplate={productTemplate}
    />
  );
};

export default YourComponent;
