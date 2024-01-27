import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import Style from '../Stylesheets/Box.module.css';

function Box() {
  // Define coordinates for each shop
  const shopCoordinates = [
    { lat: 21.149259, lng: 79.1197123, name: 'The Pet Park' },
    { lat:20.9920376, lng: 79.0860548, name: 'Pets World' },
    { lat: 21.1625024, lng: 79.0458752, name: 'The Pets Station' },
    // Add more shops as needed
  ];

  return (
    <>
    <div className={Style.container}>
      <div className={Style.Box1}>
        <div className={Style.Emptybox}></div>
        <h3 className={Style.h3}>Shop1</h3>
        <p className={Style.para}></p>
      </div>

      <div className={Style.Box2}>
        <div className={Style.Emptybox}></div>
        <h3 className={Style.h3}>Shop2</h3>
        <p className={Style.para}></p>
      </div>

      <div className={Style.Box3}>
        <div className={Style.Emptybox}></div>
        <h3 className={Style.h3}>Shop3</h3>
        <p className={Style.para}></p>
      </div>
      </div>

      <div className={Style.mapContainer}>
        <MapContainer center={[19.000000, 84.0000000]} zoom={4} style={{ width: '100%', height: '400px' }}>
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
