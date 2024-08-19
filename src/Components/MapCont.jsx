import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

const MapCont = ({ location, data }) => {
  return (
    <div>
      <MapContainer
        center={location}
        zoom={15}
        style={{ minWidth: "300px", minHeight: "300px" }}
      >
        <TileLayer url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}@2x.jpg?key=hsCAewkNMuiCYC3Aykzc">
          <Marker position={location}>
            <Popup>{data}</Popup>
          </Marker>
        </TileLayer>
      </MapContainer>
    </div>
  );
};

export default MapCont;
