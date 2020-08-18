import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name:'Shiv',age:22},
      {name:'Agrima',age:23},
      {name:'Suresh',age:27}
    ],
    showPersons : false
  }

  switchNameHandler = (newName) => {
      this.setState({
        persons : [
          {name:newName,age:22},
          {name:'Agrima',age:23},
          {name:'Suresh',age:28}
        ]
      })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name: "Shiv",age:22},
        {name:event.target.value,age:23},
        {name:'Suresh',age:28}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  showPersons(){
    if(this.state.showPersons)
    {
      
      return (
        <div>
          { 
            this.state.persons.map(person => {
              return <Person
              name = {person.name}
              age = {person.age} />
            })
          }
        </div>
      );
    } else {
      return null;
    }
  }

  render() {

    const style = {
      backgroundColor : "white",
      padding : 10,
      margin : "16px"
    };
    
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button 
        onClick={this.togglePersonHandler} 
        style={style}>
        Toggle
        </button>
        {this.showPersons()}
        
      </div>
    );

  }
}

export default App;
