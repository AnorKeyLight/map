import React from 'react';
import '../App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

function App() {
    return (
        <>
            <Header title={"New Body"}/>
            <Body titleForBody={"New Body"}/>
            <Footer title={"New Footer"}/>
        </>
    );
}

export const NewComponent = () => {
    return(
        <div>new component</div>
    )
}

export default App;