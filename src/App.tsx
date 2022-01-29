import './App.css';

import React from 'react'
import Wordle from './wordle/wordle'

const App = () => {
  return (
    <div className="App">
      <h1>Wordle Sandbox</h1>
      <Wordle />
      <footer>
        <p>
          本家のWordleをプレイしたことが無い人が作ったWordleです。<br/>
          スマートフォンには対応してません。
        </p>
        <p>&copy; <a href="https://twitter.com/smeghead" target="_blank">@smeghead</a></p>
        <p><a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Official Wordle</a></p>
      </footer>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :