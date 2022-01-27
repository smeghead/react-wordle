import './App.css';

import React, {useEffect, useState} from 'react'
import Wordle from './wordle/wordle'

const init = async function() {
  let content = '';
  await fetch('words.txt')
  .then(response => response.text())
  .then(data => {
    content = data;
  })
  const words = content.split(/\n/)
  return words[Math.floor(Math.random() * words.length)]
}

const App = () => {
  const [word, setWord] = useState('')
  useEffect(() => {
    init().then(w => setWord(w))
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