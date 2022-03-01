/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from 'react'
import Char from './char'
import * as CSS from 'csstype'

const challengeStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    width: '100%',
    position: 'relative',
}

const judge = (word:string, input: string, judge?: boolean): string[] => {
    const judges: string[] = ['', '', '', '', '']
    if ( ! judge) {
        // 判定する指定が無い時は、空文字を返却する。
        return judges
    }
    const restChars: string[] = []
    Array.from(Array(5), (v, k) => k).forEach((v, index) => {
        const c = word.substring(index, index + 1)
        if (c === input.substring(index, index + 1)) {
            judges[index] =  'correct'
        } else {
            restChars.push(c)
        }
    })
    Array.from(input).forEach((c, index) => {
        if (judges[index] !== '') {
            return
        }
        judges[index] = restChars.includes(c) ? 'include' : 'fail'
    })
    return judges
}

type Props = {
    word: string;
    input: string;
    judge?: boolean;
    failEffect?: string;
}

const Challenge = (props: Props): JSX.Element => {
    const [chars, setChars] = useState(props.input.split(''))
    const [judges, setJudges] = useState<string[]>([])
    useEffect(() => {
        setChars(props.input.split(''))
        setJudges(judge(props.word, props.input, props.judge))
    }, [props])

    return (
        <div
            role={'Challenge-' + props.judge}
            className={'Challenge ' + props.failEffect}
            style={challengeStyle}
        >
            <div className="alert">Not in word list</div>
            {chars.map((c, i) => {
                return <Char key={i} char={c} result={judges[i]} />
            })}
            {Array.from(Array(5 - chars.length), (v, k) => k).map((val, i) => {
                return <Char key={i + 100} char={''} />
            })}
        </div>
    )
}

export default Challenge