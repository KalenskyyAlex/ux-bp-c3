import L from "leaflet";
import React, {useMemo} from "react";
import {MapContainer, Marker, TileLayer, Popup, useMap} from 'react-leaflet'
import './Map.css'

interface Props {
    openInfo: Function;
}

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
            map.panInsideBounds(bounds, { animate: true });
        });
        return null;
    };

    const eventHandlers = useMemo(
        () => ({
            click() {
                console.log('SKIBDI')
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
            <Marker position={[48.732934, 21.245306]}
                eventHandlers={eventHandlers}>
            </Marker>
            <SetBounds/>

        </MapContainer>
    );
}