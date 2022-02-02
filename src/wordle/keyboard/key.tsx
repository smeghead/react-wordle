import React, {useState, useEffect} from 'react'

const style = {
    display: 'inline-block',
    textAlign: 'center',
    padding: '8px 0',
    margin: '0.4vw',
    borderWidth: '0px',
    borderRadius: '3px',
    fontSize: '3vw',
    backgroundColor: '#eee',
    cursor: 'pointer',
    maxWidth: '60px',
}

type Props = {
    char: string;
    value?: string;
    width?: string;
    keyboardHandler: (key: string) => void;
    word: string;
    challenges: string[];
}
const Key = (props: Props) => {
    const s = {
        ...style,
        width: props.width ?? '8vw',
    }
    const val = props.value ?? props.char
    const [keyStyle, setKeyStyle] = useState(s)
    useEffect(() => {
        if ( ! props.challenges) return;
        const chars = Array.from(new Set(props.challenges.join('').split(''))).sort()
        const includeChars = chars.filter(c => props.word.indexOf(c) > -1)
        const notIncludeChars = chars.filter(c => props.word.indexOf(c) === -1)

        const positionedChars = props.challenges.map(challenge => {
            return Array.from(Array(5), (_, n) => n).map(n => {
                const c = props.word.substring(n, n + 1)
                if (c === challenge.substring(n, n + 1)) {
                    return c
                }
                return undefined
            })
        }).flat().filter(val => typeof val !== 'undefined')
        if (positionedChars.indexOf(val) > -1) {
            return setKeyStyle({...keyStyle, backgroundColor: '#6aaa64'})
        }
        if (includeChars.indexOf(val) > -1) {
            return setKeyStyle({...keyStyle, backgroundColor: '#c9b458'})
        }
        if (notIncludeChars.indexOf(val) > -1) {
            return setKeyStyle({...keyStyle, backgroundColor: '#787c7e'})
        }
    }, [props])

    const clickHandler = () => props.keyboardHandler(val)
    return (
        <button className="Key" onClick={clickHandler} style={keyStyle}>
            {props.char}
        </button>
    )
}

export default Key