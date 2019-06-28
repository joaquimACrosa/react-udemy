import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if ( props.statePersons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.statePersons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.click}>Toggle Persons</button>
            {props.persons}
        </div>
    );
};

export default cockpit;