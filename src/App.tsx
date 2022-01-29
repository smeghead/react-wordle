import './App.css';

import React from 'react'
import Wordle from './wordle/wordle'

const App = () => {
  return (
    <div className="App">
      <h1>Wordle Sandbox</h1>
      <Wordle />
      <footer>
        <p>&copy; <a href="https://twitter.com/smeghead" target="_blank">@smeghead</a></p>
      </footer>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :