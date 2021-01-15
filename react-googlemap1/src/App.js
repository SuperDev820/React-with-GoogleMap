import React from "react";
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Map />
    </div>
  );
};

export default App;
