/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import LocaleContext from '../LocaleContext'

type Props = {
    word: string;
}
const Result = (props: Props) => {
    const locale = useContext(LocaleContext)
    return (
        <div className='Result'>
            <div>
                <a className="btn" href={locale.dictionaryFormat(props.word)} target="_blank" rel="noreferrer">{locale.dictionaryLinkLabel(props.word)}</a>
            </div>
            <div>
                <a className="btn" href="">{locale.tryAgain}</a>
            </div>
        </div>
    )
}

export default Result