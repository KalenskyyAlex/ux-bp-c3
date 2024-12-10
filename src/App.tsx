import React from 'react';
import Map from './components/Map/Map'
import './App.css';
import MapInfoPanel from "./components/MapInfoPanel/MapInfoPanel";

function App() {
    return (
        <div className="App">
            <MapInfoPanel/>
            <Map/>
        </div>
    );
}

export default App;
