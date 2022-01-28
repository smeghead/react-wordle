import React, {useState, useEffect } from 'react'
import useKey from "@rooks/use-key";
import Challenge from './challenge';
import Lottery, {validateWord} from './lottery/lottery'

const wordleStyle = {
    margin: '5px auto',
    width: 500,
    backgroundColor: '#eee',
};

const getChars = () => {
    let chars = []
    for (let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++) {
        chars.push(String.fromCodePoint(i))
    }
    chars.push('Enter')
    chars.push('Backspace')
    return chars
}
  
const Wordle = () => {
    const [word, setWord] = useState('')
    const [challenges, setChallenges] = useState<string[]>([])
    useEffect(() => {
        Lottery(w => setWord(w))
    }, [])
    
    const [input, setInput] = useState('')

    const handler = (e: KeyboardEvent) => {
        const key = e.key.trim()
        console.log(key)
        switch (key) {
            case 'Backspace':
                setInput(input.substring(0, input.length - 1))
                break
            case 'Enter':
                console.log('Enter', input)
                if (input.length < 5) {
                    return
                }
                if ( ! validateWord(input)) {
                    setInput('')
                    return
                }
                console.log('complete')
                const challengesNew = Object.assign([], challenges)
                challengesNew.push(input)
                setChallenges(challengesNew)
                setInput('')
                break
            default:
                if (input.length < 5) {
                    setInput(input + key)
                }
        }
        console.log(e)
    }
    useKey(getChars(), handler)

    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map(c => <Challenge input={c} word={word} judge={true} />)}
            <Challenge input={input} word={word} />
        </div>
    );
}

export default Wordle;
// vim: set expandtab ts=2 sts=2 sw=2 :