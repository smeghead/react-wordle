import './App.css';

import React from 'react'
import Wordle from './wordle/wordle'

const App = () => {
  return (
    <div className="App">
      <h2>Wordle Sandbox</h2>
      <Wordle />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :