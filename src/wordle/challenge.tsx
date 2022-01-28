import React, {useEffect, useState} from 'react'
import { isJSDocAugmentsTag } from 'typescript'
import Char from './char'

const challengeStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    width: '100%',
    backgroundColor: '#eee',
}

const judge = (index: number, char: string, word:string, judge: boolean) => {
    if ( ! judge) {
        // 判定する指定が無い時は、空文字を返却する。
        return ''
    }
    if (word.substring(index, index + 1) === char) {
        return 'correct'
    }
    if (word.split('').includes(char)) {
        return 'include'
    }
    return 'fail'
}

const Challenge = (props: {word: string, input: string, judge?: boolean}) => {
    const [chars, setChars] = useState(props.input.split(''))
    useEffect(() => {
        setChars(props.input.split(''))
    }, [props])
    console.log(props, chars)
    return (
        <div className="Challenge" style={challengeStyle}>
            {chars.map((c, i) => {
                console.log('[' + c + ']')
                return <Char key={i} char={c} result={judge(i, c, props.word, props.judge ?? false)} />
            })}
            {[...Array(5 - chars.length).keys()].map((val, i) => {
            return (
                <Char key={i + chars.length} char={''} />
            )})}
        </div>
    )
}

export default Challenge