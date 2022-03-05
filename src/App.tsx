/* eslint-disable react/jsx-key */
import './App.css'

import React from 'react'
import Wordle from './wordle/wordle'
import { LocaleContextProvider } from './LocaleContext'
import Header from './header'
import Footer from './footer'

const App = (): JSX.Element => {
    return (
        <div className="App">
            <LocaleContextProvider>
                <Header />
                <Wordle />
                <Footer />
            </LocaleContextProvider>
        </div>
    )
}

export default App