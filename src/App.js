import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
      user: "Joaquim",
      user2: "Inês"
  };

  changeUsername = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        user: event.target.value
      }
    );
  }


  render () {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserOutput username={this.state.user}>is the coder of this React app</UserOutput>
        <UserInput change={this.changeUsername} username={this.state.user}></UserInput>
        <UserOutput username={this.state.user2}>is a beautifull girl! ❤</UserOutput>
      </div> 
    );
  }
}

export default App;
