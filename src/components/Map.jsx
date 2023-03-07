import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const position = [51.505, -0.09]

const Map = ({ center, zoom }) => {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '80vw', height: '70vh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>You are here!</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;

