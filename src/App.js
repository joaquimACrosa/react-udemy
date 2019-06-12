import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  
  state = {
    validation: null,
    word: ''
  }

  validText = () =>{

    if (this.state.length > 5){
      this.setState({validation: 'Text long enough'});
    }
    else{
      this.setState({validation: 'Text long short'});
    }

  }

  theLength= event => 
  {
    this.setState({
      word: event.target.value
    })
    this.validText();
  };

  styles = {
    margin: '16px',
    border: '1px solid black',
    display: 'inline-block', 
    padding: '16px'
  };

  deleteCharHandler = ( index ) => {
    const split = this.state.word.split('');
    split.splice(index, 1);
    const join = split.join('');

    this.setState({word: join})
  }


  render() {

    const charList = this.state.word.split('').map( (char, index) => {
      return <CharComponent click={() => this.deleteCharHandler(index)} character={char} key={index} style={this.styles}/>
    })
    
    return (
      <div className="App">
        <input onChange={this.theLength} value={this.state.word}>
        </input>
        <p>{this.state.length}</p>
        <ValidationComponent
          thelenght={this.state.validation}
        />

        {charList}

        <ol>
          <li>DONE Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>DONE Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>DONE Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>DONE Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>DONE Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>DONE When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
