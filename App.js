import React, { Component } from 'react';
import Display from './Display';

//import styles from './App.css';
class App extends Component {
  render() {
    return (
      <div>
       <h1 className="div-class">This is my react app</h1>
       <button className="button-app">Switch Users</button>
       <Display  name="Jacob" age="298" birthMonth="July"/>
       <Display name="Wick" age="20" birthMonth="feb"/>
      </div>
    );
  }
}

export default App;
