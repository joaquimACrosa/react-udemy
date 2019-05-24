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

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 26 },
          { name: 'Inês', age: 21 },
        ]
      }
    )
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Joaquim Rosa')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Joe Rosa')}
          changed={this.nameChangedHandler}>Coding in React
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
