import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 
  state = {
    persons: [
      { id: 0, name: 'Max', age: 28 },
      { id: 1, name: 'Manu', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deleteNameHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <div> 
        {this.state.persons.map(( person, index ) => {
            return  <Person
                      name={person.name}        
                      age={person.age}
                      key={person.id}
                      click={() => this.deleteNameHandler(index)}        
                    />
          })
        }
        </div>
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div> 
    );
  }
}

export default App;
