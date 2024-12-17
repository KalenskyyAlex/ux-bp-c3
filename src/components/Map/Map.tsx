import L, {LatLngExpression} from "leaflet";
import React, {useMemo, useState} from "react";
import {MapContainer, Marker, Polyline, TileLayer, useMap} from 'react-leaflet'
import './Map.css'
import location from './user_location.svg'

interface Props {
    openInfo: Function;
    isNavigating: boolean;
}

const redIcon = new L.Icon({
    iconUrl: location,
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
    shadowSize: [25, 25],
});

const lineCoordinates: LatLngExpression[] = [
    [48.730931, 21.243887],  // Starting point
    [48.731158, 21.243299],    // Intermediate point
    [48.731582, 21.244579],  // Another point
    [48.730639, 21.245348],    // Ending point
];

// Optional: Define style options for the polyline
const lineStyle = {
    color: "#0F62FEFF",       // Line color
    weight: 4,           // Line thickness
    opacity: 0.7,        // Line transparency
    dashArray: "5, 10",  // Optional: Dashed line style
};

export default function Map(props: Props) {
    const bounds = L.latLngBounds(
        [48.728596, 21.240314], // Southwest corner (latitude, longitude)
        [48.738467, 21.251611]  // Northeast corner (latitude, longitude)
    );

    // Custom component to set bounds on the map
    const SetBounds = () => {
        const map = useMap(); // Get map instance
        map.setMaxBounds(bounds); // Restrict movement
        map.on('drag', () => {
            // Keep the user inside the bounds when dragging
            map.panInsideBounds(bounds, {animate: true});
        });
        return null;
    };

    const eventHandlers = useMemo(
        () => ({
            click() {
                props.openInfo()
            },
        }),
        [],
    )

    return (
        <MapContainer className="leaflet-container"
                      center={[48.732934, 21.245306]}
                      zoom={17}
                      zoomControl={false}
                      scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.7307260, 21.2459920]}
                    eventHandlers={eventHandlers}/>
            <Marker position={[48.7310410, 21.2448280]}
                    eventHandlers={eventHandlers}/>
            <Marker position={[48.7316250, 21.2435840]}
                    eventHandlers={eventHandlers}/>
            <Marker position={[48.7317560, 21.2442030]}
                    eventHandlers={eventHandlers}/>
            <Marker position={[48.7323110, 21.2467190]}
                    eventHandlers={eventHandlers}/>
            <Marker position={[48.730931, 21.243887]} icon={redIcon}/>
            {
                props.isNavigating ?
                    <Polyline positions={lineCoordinates} pathOptions={lineStyle}/>
                    : null
            }
            {
                props.isNavigating ?
                    <Marker position={[48.730639, 21.245308]} icon={redIcon}/>
                    : null
            }
            <SetBounds/>
        </MapContainer>
    );
}