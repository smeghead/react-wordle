import React, {useState, useEffect} from 'react'
import useKey from '@rooks/use-key'
import Challenge from './challenge'
import Lottery from './lottery/lottery'
import Handler from './keyboard/handler'
import Keyboard from './keyboard/keyboard'
import Result from './result'
import * as CSS from 'csstype'

const wordleStyle: CSS.Properties = {
    margin: '5px auto',
}

  
const Wordle = () => {
    
    const [word, setWord] = useState<string>('')
    const [challenges, setChallenges] = useState<string[]>([])
    const [complete, setComplete] = useState(false)
    
    const lottery = new Lottery()
    
    useEffect(() => {
        lottery.lotteryWord(w => setWord(w))
    }, [])
    
    const [input, setInput] = useState<string>('')
    const [failEffect, setFailEffect] = useState<string>('')
    useEffect(() => {
        const refuseId = setTimeout(() => setFailEffect(className => className.replace(/refuse/, '')), 500)
        const alertId = setTimeout(() => setFailEffect(className => className.replace(/alert/, '')), 1000)
        return () => {
            clearTimeout(refuseId)
            clearTimeout(alertId)
        }
    }, [failEffect])
    
    const handler = new Handler(setInput, setChallenges, setComplete, setFailEffect, lottery)

    useKey(handler.getChars(), (e: KeyboardEvent) => handler.process(e.key.trim(), word, input, challenges))

    const keyboardHandler = (key: string) => handler.process(key, word, input, challenges)
    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map((c, n) => <Challenge key={n} input={c} word={word} judge={true} />)}
            {complete === false && <Challenge input={input} word={word} failEffect={failEffect} />}
            {complete && <Result word={word} />}
            {/* eslint-disable-next-line react/jsx-key */}
            <Keyboard keyboardHandler={keyboardHandler} word={word} challenges={challenges} />
        </div>
    )
}

export default Wordle