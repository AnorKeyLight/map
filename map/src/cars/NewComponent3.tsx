import React from "react";


/*
Type '{ students: { id: number; name: string; age: number;*/
type NewComponent3Type = {
    topCars: Array<trololo>;
}
type trololo = {
    manufacturer: string, model: string, id: number
}

export const NewComponent3 = (props: NewComponent3Type) => {
    return (
        <ul>
            {props.topCars.map((ObjectFromCarsArray: trololo, index: number) => {
                return (
                    <li key={ObjectFromCarsArray.id}>
                        <span>{ObjectFromCarsArray.manufacturer}</span>
                        <span>{ObjectFromCarsArray.model}</span>
                    </li>
                )
            })}
        </ul>
    )
}