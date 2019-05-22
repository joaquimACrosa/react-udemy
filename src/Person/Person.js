import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age}!</p>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
};

export default person;