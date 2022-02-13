import './App.css';

import React, {useContext, useEffect} from 'react'
import Wordle from './wordle/wordle'
import LocaleContext, { LocaleContextProvider } from './LocaleContext'
import Footer from './footer';

const App = () => {
    return (
        <div className="App">
            <LocaleContextProvider>
                <h1>Wordle Sandbox</h1>
                <Wordle />
                <Footer />
            </LocaleContextProvider>
        </div>
    );
}

export default App;