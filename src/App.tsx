import './App.css';

import React, {useEffect, useState} from 'react'
import Wordle from './wordle/wordle'

const App = () => {
  const [word, setWord] = useState('')

  return (
    <div className="App">
      <h2>Wordle</h2>
      <Wordle />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :