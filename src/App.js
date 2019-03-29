import React, {useState, useReducer, useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [civ, setCiv ] = useState('');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label>
            Enter a civilization:
            <input type="text" value={civ} onChange={(event) => setCiv(event.target.value)} />
          </label>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

export default App;
