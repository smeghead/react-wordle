/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import LocaleContext from './LocaleContext'

const Footer = (): JSX.Element => {
    const locale = useContext(LocaleContext)
    const changeLocale = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        locale.toggle()
    }
    return (
        <footer>
            {locale.footer}
            <p>&copy; <a href="https://twitter.com/smeghead" target="_blank" rel="noreferrer">@smeghead</a></p>
            <p><a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noreferrer">Official Wordle</a></p>
            <a href="" onClick={changeLocale}>{locale.label}</a>
        </footer>
    )
}
export default Footer