import React from 'react';

import './Person.css'

const person = (props)=>{
    return (
        <div className="Person">
            <h1 onClick={props.click}>My Name is {props.name} and age is {props.age}.{props.children}</h1>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    )
};

export default person;