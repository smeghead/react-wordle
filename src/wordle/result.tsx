/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import LocaleContext from '../LocaleContext'
import { judge } from './judge'

type Props = {
    word: string;
    challenges: string[];
}
const Result = (props: Props): JSX.Element => {
    const locale = useContext(LocaleContext)

    const shareHandler = (e: React.MouseEvent<HTMLAnchorElement>): void  => {
        e.preventDefault()
        const challenges = props.challenges.map(input => {
            const judges = judge(props.word, input, true)
            const results = judges.map(result => {
                switch (result) {
                    case 'correct':
                        return '\u{1F7E9}'
                    case 'include':
                        return '\u{1F7E8}'
                    case 'fail':
                        return '\u{2B1C}\u{FE0F}'
                }
            })
            return results.join('')
        })
        const message = `Wordle Sandbox ${challenges.length}/∞
${challenges.join('\n')}
https://wordle-sandbox.link/
`
        const shareInfo = {
            title: 'Wordle Sandbox',
            text: message,
            utl: 'https://wordle-sandbox.link/',
        }
        if (typeof navigator.share !== 'undefined') {
            navigator.share(shareInfo)
                .then(() => console.log('share done'))
                .catch((error) => console.log('share failed.', error))
        } else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(message)
                alert(locale.copiedMessage)
            }
        }
    }
    return (
        <div className='Result'>
            <div>
                <a className="btn" href={locale.dictionaryFormat(props.word)} target="_blank" rel="noreferrer">{locale.dictionaryLinkLabel(props.word)}</a>
            </div>
            <div>
                <a className="btn" href="" onClick={shareHandler}>{locale.shareButtonLabel}</a>
            </div>
            <div>
                <a className="btn" href="">{locale.tryAgain}</a>
            </div>
        </div>
    )
}

export default Result