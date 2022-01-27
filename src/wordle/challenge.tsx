import React, {useState} from 'react'
import Char from './char'

const wordleStyle = {
    margin: '5px',
    width: 100,
    height: 500,
    backgroundColor: 'gray',
};

const Challenge = (props: {word: string}) => {
    const [chars, setChars] = useState(props.word.split(''))
    console.log(props, chars)
    return (
        <div className="Challenge">
            {chars.map((c, i) => {
                console.log('[' + c + ']')
                return <Char key={i} char={c} />
            })}
        </div>
    )
}

export default Challenge