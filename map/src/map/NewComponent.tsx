import React from "react";

type NewComponentType = {
    students: Array<StudentType>;
}

type StudentType = {
    id: number,
    name: string,
    age: number,
}


export const NewComponent = (props: NewComponentType) => {
    /*debugger*/
    return (
        <ul>
            {props.students.map((objectFromStudentArray: StudentType, index: number) => {
                /*debugger*/
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};

