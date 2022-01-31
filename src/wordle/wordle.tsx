import React, {useState, useEffect} from 'react'
import useKey from "@rooks/use-key";
import Challenge from './challenge';
import Lottery from './lottery/lottery'
import KeyBoard from './keyboard/keyboard'

const wordleStyle = {
    margin: '5px auto',
};

  
const Wordle = () => {
    
    const [word, setWord] = useState<string>('')
    const [challenges, setChallenges] = useState<string[]>([])
    const [complete, setComplete] = useState(false)
    
    const lottery = new Lottery()
    
    useEffect(() => {
        lottery.lotteryWord(w => setWord(w))
    }, [])
    
    const [input, setInput] = useState<string>('')
    
    const keyboard = new KeyBoard(setInput, setChallenges, setComplete, lottery)

    const handler = (e: KeyboardEvent) => keyboard.process(e.key.trim(), word, input, challenges)

    useKey(keyboard.getChars(), handler)

    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map(c => <Challenge input={c} word={word} judge={true} />)}
            {complete === false && <Challenge input={input} word={word} />}
        </div>
    );
}

export default Wordle;