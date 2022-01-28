import React, {useEffect, useState} from 'react'
import Char from './char'

const wordleStyle = {
    margin: '5px',
    width: 100,
    height: 500,
    backgroundColor: 'gray',
};

const Challenge = (props: {word: string, input: string}) => {
    const [chars, setChars] = useState(props.input.split(''))
    useEffect(() => {
        setChars(props.input.split(''))
    }, [props])
    console.log(props, chars)
    return (
        <div className="Challenge">
            {chars.map((c, i) => {
                console.log('[' + c + ']')
                return <Char key={i} char={c} />
            })}
            {[...Array(5 - chars.length).keys()].map((val, i) => {
                console.log('xxxxx')
            return (
                <Char key={i + chars.length} char={''} />
            )})}
        </div>
    )
}

export default Challenge