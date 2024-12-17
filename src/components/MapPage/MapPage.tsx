import React, {useState} from 'react';
import Map from '../Map/Map'
import './MapPage.css';
import MapInfoPanel from "../MapInfoPanel/MapInfoPanel";
import Search from "../Search/Search";

function MapPage() {
    const [isClosed, setIsClosed] = useState(true);

    const closeThis = () => {
        setIsClosed(true)
    }

    const openThis = () => {
        setIsClosed(false)
    }

    return (
        <div className="App">
            <Search/>
            {   isClosed ? null :
                <MapInfoPanel onClick={closeThis}/>
            }
            <Map openInfo={openThis}/>
        </div>
    );
}

export default MapPage;
