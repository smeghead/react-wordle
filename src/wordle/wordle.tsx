import React, {useState, useEffect } from 'react'
import Challenge from './challenge';

const wordleStyle = {
    margin: '5px auto',
    width: 500,
    backgroundColor: '#eee',
};

const Wordle = (props: { word: string }) => {
    const [word, setWord] = useState('')
    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        console.log('wordle.tsx', props)
        setWord(props.word)
    }, [props])
    return (
        <div className="Wordle" style={wordleStyle}>
            {challenges.map(c => {
                <div className='Chalenges'>
                    <Challenge word={c} />
                </div>
            })}
            <Challenge word={word || '     '} />
        </div>
    );
}

export default Wordle;
// vim: set expandtab ts=2 sts=2 sw=2 :