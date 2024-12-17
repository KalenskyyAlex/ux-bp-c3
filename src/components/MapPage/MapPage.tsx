import React, {useState} from 'react';
import Map from '../Map/Map'
import './MapPage.css';
import MapInfoPanel from "../MapInfoPanel/MapInfoPanel";
import Search from "../Search/Search";
import NavigationPanel from "../NavigationPanel/NavigationPanel";

function MapPage() {
    const [isClosed, setIsClosed] = useState(true);
    const [isNavigating, setIsNavigating] = useState(false);

    const closeThis = () => {
        setIsClosed(true)
    }

    const openThis = () => {
        setIsClosed(false)
    }

    const startNavigate = () => {
        setIsNavigating(true)
        setIsClosed(true)
    }

    const closeNavigate = () => {
        setIsNavigating(false)
    }

    return (
        <div className="App">
            <Search/>
            {isClosed ? null :
                <MapInfoPanel onClick={closeThis} onNavigate={startNavigate}/>
            }
            {!isNavigating ? null :
                <NavigationPanel onClick={closeNavigate}/>
            }
            <Map isNavigating={isNavigating} openInfo={openThis}/>
        </div>
    );
}

export default MapPage;
