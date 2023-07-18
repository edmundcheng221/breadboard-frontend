import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  useEffect(() => {
    fetch("http://localhost:3080/v1/parts?partNumber=0510210200")
      .then(res => res.json())
      .then(data => console.log(data))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
