import './App.css';

import React, {useState} from 'react'
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
let answer = ''
init().then(p => {
    answer = p
    console.log(answer)
});

const App = () => {
  return (
    <div className="App">
      <h2>Wordle</h2>
      {/* <input type="text" onChange={e => setDisplayString(e.target.value)} placeholder='文字を入力してください。'/> */}
      <Wordle word={answer} />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :