import React from 'react';
import PanoramaViewer from "../PanoramaViewer/PanoramaViewer";
import BackButton from "../BackButton/BackButton";
import styles from './VTPage.module.css';
import {MapContainer, TileLayer} from "react-leaflet";

function VTPage() {// Replace with your image path
    return (
        <div style={{width:'100%', height:'100%'}}>
            <div className={styles.vv1Lg1056px16Column}>
                <MapContainer className={styles.vv1Lg1056px16ColumnItem}
                              center={[48.732934, 21.245306]}
                              zoom={17}
                              zoomControl={false}
                              scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <PanoramaViewer/>
                <img className={styles.image1Icon} alt="" src="image 1.png" />
                <img className={styles.outsideMarginIcon} alt="" src="outside-margin.svg" />
                {/*<img className={styles.marker12Icon} alt="" src="Marker 12.svg" />*/}
                {/*<img className={styles.chevronUpIcon} alt="" src="chevron--up.svg" />*/}
                <BackButton/>
            </div>)
        </div>
    );
}


export default VTPage;