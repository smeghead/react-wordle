/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import LocaleContext from './LocaleContext'

const Header = ():JSX.Element => {
    const locale = useContext(LocaleContext)
    const changeLocale = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        locale.toggle()
    }
    return (
        <header className="Header" >
            <a className="lang" href="" onClick={changeLocale}>
                <img src="/images/lang.png" alt={locale.label} title={locale.label} />
            </a>
            <h1>Wordle Sandbox</h1>
        </header>
    )
}

export default Header