import React, { useEffect } from "react";
import L, { Icon } from "leaflet";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Using tesla data until we can get bank data
import locationData from "../../data/bankData.json";

// CSS imports
import "./BankMap.css";
function BankMap() {
  return (
    <div className="map-container">
      <h3 className="map-header"> Find Banks near you</h3>
      <div className="map-wrapper">
        <MapContainer
          center={[51.21389, -102.462776]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locationData.map((bankLocation) => (
            <Marker
              key={bankLocation.id}
              position={[
                bankLocation.location.latitude,
                bankLocation.location.longitude,
              ]}
              icon={new Icon({ iconUrl: "assets/location-icon.svg" })}
            >
              <Popup>
                <p className="bank-name">{bankLocation.name}</p>
                <p className="bank-about">{bankLocation.description}</p>
                <p>fakebank@fakedomain.com</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default BankMap;
