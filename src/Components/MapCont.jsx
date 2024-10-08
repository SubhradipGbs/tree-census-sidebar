import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import default Leaflet marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// import markerIcon from '/tree_marker.png';

// Set the default marker icon
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [20, 30],
  iconAnchor: [10, 30],
  popupAnchor: [1, -34],
  shadowSize: [0, 0],
});

const MapCont = ({ location, data }) => {
  return (
    <div>
      <MapContainer
        center={location}
        zoom={15}
        style={{ minWidth: "300px", minHeight: "300px" }}
      >
        <TileLayer url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}@2x.jpg?key=hsCAewkNMuiCYC3Aykzc" />
        <Marker position={location} icon={defaultIcon}>
          <Popup>{data}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapCont;
