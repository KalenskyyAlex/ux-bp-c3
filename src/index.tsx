import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapPage from './components/MapPage/MapPage';
import InfoPage from "./components/InfoPage/InfoPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/map",
        element: <MapPage/>,
    },
    {
        path: "/info",
        element: <InfoPage/>,
    }
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);