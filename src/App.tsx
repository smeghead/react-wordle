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
                    何度でも試せるWordleです。<br />
                    失敗回数制限がないので、正解するまで回答できます。<br />
                    リロードすれば正解の単語も違う新しいゲームを開始します。<br />
                </p>
                <p>&copy; <a href="https://twitter.com/smeghead" target="_blank">@smeghead</a></p>
                <p><a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Official Wordle</a></p>
            </footer>
        </div>
    );
}

export default App;