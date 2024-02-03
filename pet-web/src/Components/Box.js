import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Slider from "./Slider.js"
import Style from "../Stylesheets/Box.module.css";

function Box() {
  const shopCoordinates = [
    { lat: 21.149259, lng: 79.1197123, name: "The Pet Park" },
    { lat: 20.9920376, lng: 79.0860548, name: "Pets World" },
    { lat: 21.1550951, lng: 79.040207, name: "Pets at Home" },
    { lat: 21.1149424, lng: 78.9550273, name: "Pets Junction" },
    { lat: 21.1035246, lng: 79.0399646, name: "Pets Master" },
  ];

  return (
    <>
      <Slider />

      <div className={Style.mapContainer}>
       
        {/* Render the MapContainer */}
        <MapContainer
          center={[21.0, 79.25]}
          zoom={9}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {shopCoordinates.map((shop, index) => (
            <Marker key={index} position={[shop.lat, shop.lng]}>
              <Popup>{shop.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}

export default Box;
