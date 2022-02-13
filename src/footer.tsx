import { useContext, useEffect } from "react"
import LocaleContext from './LocaleContext'

const Footer = () => {
    let locale = useContext(LocaleContext)
    const changeLocale = (e) => {
        e.preventDefault()
        console.log('changeLocale')
        locale.toggle()
        console.log(locale)
    }
    useEffect(() => {
        console.log('App locale changed')
    }, [locale])
    return (
        <footer>
            <a href="" onClick={changeLocale}>{locale.label}</a>
            {locale.footer}
            <p>&copy; <a href="https://twitter.com/smeghead" target="_blank" rel="noreferrer">@smeghead</a></p>
            <p><a href="https://www.powerlanguage.co.uk/wordle/" target="_blank" rel="noreferrer">Official Wordle</a></p>
        </footer>
    )
}
export default Footer