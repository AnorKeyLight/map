import React from 'react';
import './App.css';
import {Header} from "./SIte/Header";
import {Body} from "./SIte/Body";
import {Footer} from "./SIte/Footer";
import AppMap from "./map/AppMap";

function App() {
    return (
        <>
            <AppMap/>
        </>
    );
}

export const NewComponent = () => {
    return (
        <div>new component</div>
    )
}

export default App;