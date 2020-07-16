import React, { Component } from 'react';
import Practiceapp from './practice/Practiceapp'
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext('light');

class App extends Component {
  render() {
    return (
      <div className="App">
      <ThemeContext.Provider value="dark"> 
        <Practiceapp />
         </ThemeContext.Provider>
      </div>
    );
  }
}



export default App;
