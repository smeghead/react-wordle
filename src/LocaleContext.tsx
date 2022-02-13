import React, { useContext, useEffect, useState } from 'react'
import localeSetting from './localeSetting'
import type { LocaleSetting } from './localeSetting'

console.log(navigator.language)
const currentLocale = navigator.language === 'ja' ? localeSetting.ja : localeSetting.en
const LocaleContext = React.createContext(currentLocale)

export const LocaleContextProvider = ({ children }) => {
    const [localeVal, setLocaleVal] = useState(() => {
        return navigator.language === 'ja' ? 'ja' : 'en'
    })

    const [setting, setSetting]  = useState<LocaleSetting>(localeSetting.en) //default value
    useEffect(() => {
        const setting = localeVal === 'en' ? localeSetting.en : localeSetting.ja
        setting.toggle = () => setLocaleVal(localeVal => localeVal === 'en' ? 'ja' : 'en')
        console.log(setting)
        setSetting(setting)
    }, [localeVal])

    return (
        <LocaleContext.Provider value={setting}>
            {children}
        </LocaleContext.Provider>
    )
}
export default LocaleContext