import React, {useState} from 'react';
import {NewComponent3} from "./NewComponent3";
import {NewComponent2} from "../map2/NewComponent2";

function AppCars() {
    const [topCars, SetCars] = useState([
        {manufacturer:'BMW', model:'m5cs', id: 1},
        {manufacturer:'Mercedes', model:'e63s', id: 2},
        {manufacturer:'Audi', model:'rs6', id: 3},
        ]
    )
    return (
        <NewComponent3 topCars={topCars}/>
    );
}

export default AppCars;