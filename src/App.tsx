import './App.css';

import React, {useEffect, useState} from 'react'
import Wordle from './wordle/wordle'
import Lottery from './wordle/lottery/lottery'

const App = () => {
  const [word, setWord] = useState('')
  useEffect(() => {
    Lottery(w => setWord(w))
  }, [])
  return (
    <div className="App">
      <h2>Wordle</h2>
      <Wordle word={word} />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :