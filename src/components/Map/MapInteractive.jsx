import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import s from "./MapInteractive.module.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import logo from "./img/logo.png";

const MapInteractive = ({ positionDetail }) => {
  const MarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  const [mapCenter, setMapCenter] = useState(
    positionDetail ? positionDetail : ["45.5187857791056", "-122.6251855889669"]
  );

  return (
    <div className={s.map_container}>
      <MapContainer className={s.map} center={mapCenter} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={mapCenter} icon={MarkerIcon}>
          <Popup position={mapCenter}>
            <div className={s.navlink}>
              <a
                href="https://www.google.com/maps/place/3700+SE+Washington+St,+Portland,+OR+97214,+EE.+UU./@45.5178241,-122.6284546,16z/data=!4m5!3m4!1s0x5495a0eb68828817:0x3fd4af99246d5b58!8m2!3d45.518586!4d-122.6258284?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className={s.title}>The Green Darwin</h3>
                <img className={s.pictureHome} src={logo} alt="" />
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default MapInteractive;
