import React, { useEffect, useState, ReactNode } from 'react'
import localeSetting from './localeSetting'
import type { LocaleSetting } from './localeSetting'

const currentLocale = (navigator.language ?? '').startsWith('ja') ? localeSetting.ja : localeSetting.en
const LocaleContext = React.createContext(currentLocale)

type Props = {
    children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LocaleContextProvider = ({ children }: Props): JSX.Element => {
    const [localeVal, setLocaleVal] = useState(() => {
        return (navigator.language ?? '').startsWith('ja') ? 'ja' : 'en'
    })

    const [setting, setSetting]  = useState<LocaleSetting>(localeSetting.en) //default value
    useEffect(() => {
        const setting = localeVal === 'en' ? localeSetting.en : localeSetting.ja
        setting.toggle = () => setLocaleVal(localeVal => localeVal === 'en' ? 'ja' : 'en')
        setSetting(setting)
    }, [localeVal])

    return (
        <LocaleContext.Provider value={setting}>
            {children}
        </LocaleContext.Provider>
    )
}
export default LocaleContext