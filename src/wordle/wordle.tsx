import React, {useState, useEffect} from 'react'
import useKey from "@rooks/use-key";
import Challenge from './challenge';
import Lottery from './lottery/lottery'
import Handler from './keyboard/handler'
import Keyboard from './keyboard/keyboard'

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
    
    const handler = new Handler(setInput, setChallenges, setComplete, lottery)

    useKey(handler.getChars(), (e: KeyboardEvent) => handler.process(e.key.trim(), word, input, challenges))

    const keyboardHandler = (key: string) => handler.process(key, word, input, challenges)
    
    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map(c => <Challenge input={c} word={word} judge={true} />)}
            {complete === false && <Challenge input={input} word={word} />}
            <Keyboard keyboardHandler={keyboardHandler} />
        </div>
    );
}

export default Wordle;