import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  
  render() {
    function formatName(user) {
    return (user.firstName + ' ' + user.lastName);
  }

    var helloWorld = 'Welcome to React';
    const user = {
    firstName: 'Rosy',
    lastName: 'Rambani'
  };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h1>Hello, {formatName(user)}!</h1>
      </div>
    );
  }
}

export default App;
