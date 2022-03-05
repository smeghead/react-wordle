/* eslint-disable react/jsx-key */
import React, {useEffect, useReducer, useState} from 'react'
import Char from './char'
import * as CSS from 'csstype'
import settings from './settings'

const challengeStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    width: '100%',
    position: 'relative',
}

const judge = (word:string, input: string, judge: boolean): string[] => {
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
const reducer = (state: string[], action:{index?: number, results: string[]}) => {
    if (typeof action.index === 'undefined') {
        return action.results
    }
    state[action.index] = action.results[action.index]
    return [...state]
}

type Props = {
    word: string;
    input: string;
    judge: boolean;
    failEffect?: string;
    rollOpenClass?: string;
}

const Challenge = (props: Props): JSX.Element => {
    const [chars, setChars] = useState(props.input.split(''))
    // const [judges, setJudges] = useState<string[]>([])
    const [judges, dispatch] = useReducer(reducer, ['', '', '', '', ''])
    useEffect(() => {
        setChars(props.input.split(''))
        dispatch({results: judge(props.word, props.input, props.judge)})
        if (props.judge) {
            return
        }
        if (props.rollOpenClass !== '') {
            const rollJudges = judge(props.word, props.input, true)
            if (JSON.stringify(judges) === JSON.stringify(rollJudges)) {
                return
            }
            Array.from(Array(5), (v, k) => k).forEach((i => {
                setTimeout(() => dispatch({index: i, results: rollJudges}), settings.rollInterval * i)
            }))
        }
    }, [props])

    return (
        <div
            role={'Challenge-' + props.judge}
            className={'Challenge ' + props.failEffect + ' ' + props.rollOpenClass}
            style={challengeStyle}
        >
            <div className="alert">Not in word list</div>
            {chars.map((c, i) => {
                const roll = props.judge ? '' : judges[i] !== '' ? 'roll' : ''
                return <Char key={i} char={c} result={judges[i]} rollOpenClass={roll} judge={props.judge} />
            })}
            {Array.from(Array(5 - chars.length), (v, k) => k).map((val, i) => {
                return <Char key={i + 100} char={''} judge={props.judge} />
            })}
        </div>
    )
}

export default Challenge