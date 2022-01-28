import React, {useState, useEffect } from 'react'
import useKey from "@rooks/use-key";
import Challenge from './challenge';

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
  
const Wordle = (props: { word: string }) => {
    const [word, setWord] = useState('')
    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        console.log('wordle.tsx', props)
        setWord(props.word)
    }, [props])

    const [input, setInput] = useState('')

    const handler = (e: KeyboardEvent) => {
        switch (e.key) {
            case 'Backspace':
                setInput(input.substring(0, input.length - 1))
                break
            case 'Enter':
                break
            default:
                if (input.length < 5) {
                    setInput(input + e.key)
                }
        }
        console.log(e)
    }
    useKey(getChars(), handler)

    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map(c => {
                <div className='Chalenges'>
                    <Challenge input={c} word={word} />
                </div>
            })}
            <Challenge input={input} word={word} />
        </div>
    );
}

export default Wordle;
// vim: set expandtab ts=2 sts=2 sw=2 :