import * as PANOLENS from "panolens";
import panorama_ from './panorama.jpg';
// @ts-ignore
import { ImagePanorama, Viewer, CONTROLS, Infospot } from 'panolens';
import {useEffect, useRef} from "react";

const PanoramaViewer = () => {
    const containerRef = useRef(null);
    const panorama = useRef(null)
    const viewer = useRef(null)
    const infospot = useRef(null)
    const controls = useRef(null)

    useEffect(() => {

        if (panorama.current || viewer.current) {
            return
        }

        controls.current = CONTROLS;

        panorama.current = new ImagePanorama(panorama_);

        infospot.current = new Infospot(350);
        // @ts-ignore
        infospot.current.position.set( 1000, -1000, -2000 );
        // @ts-ignore
        infospot.current.addHoverText( 'Simple Info Text' );

        // @ts-ignore
        infospot.current.addEventListener("click", () => {
            alert("Infospot clicked!");
        });

        // @ts-ignore
        panorama.current.add(infospot.current)

        viewer.current = new Viewer({
            container: containerRef.current,
            controlBar: true, // Enable default control bar
            cameraFov: 75, // Set initial field of view
        });
        // @ts-ignore
        viewer.current.add(panorama.current);
    }, []);

    return (
        <div >
            <div ref={containerRef} id='panoCont' style={{width:'100vw', height:'100vh', margin:'0 auto'}} ></div>
        </div>
    )
};

export default PanoramaViewer;