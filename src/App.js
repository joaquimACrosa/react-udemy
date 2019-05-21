import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  /*

  CLASS BASED COMPONENT 
  
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
    ]
  }

  switchNameHandler = () => {
    //console.log('Was Clicked!');
    // DON'T DO THIS: this.state.person[0].name = 'Joaquim';
    this.setState(
      {
        persons: [
          { name: 'Joaquim', age: 26 },
          { name: 'Inês', age: 21 },
        ]
      }
    )
  }*/

  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');



  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was Clicked!');
    // DON'T DO THIS: this.state.person[0].name = 'Joaquim';
    setPersonsState(
      {
        persons: [
          { name: 'Joaquim', age: 26 },
          { name: 'Inês', age: 21 },
        ]
      }
    )
    setOtherState(
      'some other value'
    )
  }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Coding in React</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      </div> 
    );
}

export default app;
