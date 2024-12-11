import React from 'react';
import Map from './components/Map/Map'
import './App.css';
import MapInfoPanel from "./components/MapInfoPanel/MapInfoPanel";
import Search from "./components/Search/Search";

function App() {
    return (
        <div className="App">
            <Search/>
            <MapInfoPanel/>
            <Map/>
        </div>
    );
}

export default App;
