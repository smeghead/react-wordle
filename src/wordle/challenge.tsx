/* eslint-disable react/jsx-key */
import { relative } from 'node:path/win32'
import React, {useEffect, useState} from 'react'
import Char from './char'

const challengeStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    width: '100%',
    position: 'relative',
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

type Props = {
    word: string;
    input: string;
    judge?: boolean;
    failEffect?: string;
}

const Challenge = (props: Props) => {
    const [chars, setChars] = useState(props.input.split(''))
    useEffect(() => {
        setChars(props.input.split(''))
    }, [props])

    return (
        <div
            role={'Challenge-' + props.judge}
            className={'Challenge ' + props.failEffect}
            style={challengeStyle}
        >
            <div className="alert">Not in word list</div>
            {chars.map((c, i) => {
                return <Char key={i} char={c} result={judge(i, c, props.word, props.judge ?? false)} />
            })}
            {Array.from(Array(5 - chars.length), (v, k) => k).map((val, i) => {
                return <Char key={i + 100} char={''} />
            })}
        </div>
    )
}

export default Challenge