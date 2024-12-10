import React, {useState} from 'react';
import Map from './components/Map/Map'
import './App.css';
import MapInfoPanel from "./components/MapInfoPanel/MapInfoPanel";
import Search from "./components/Search/Search";

function App() {
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

export default App;
