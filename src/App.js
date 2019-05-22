import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    // DON'T DO THIS: this.state.person[0].name = 'Joaquim';
    this.setState(
      {
        persons: [
          { name: newName, age: 26 },
          { name: 'Inês', age: 21 },
        ]
      }
    )
  }

  render () {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={() => this.switchNameHandler('Joaquim Rosa')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Joe Rosa')}>Coding in React
          </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}> 
        </Person>
      </div> 
    );
  }
}

export default App;
