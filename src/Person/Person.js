import React from 'react';

import './Person.css';

const person = (props) => {

    return (
    <div className="Person">
        <p>I'm {props.name} and I am {props.age}!</p>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
};

export default person;