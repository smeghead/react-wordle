/* eslint-disable react/jsx-key */
import React, {useEffect, useReducer, useState} from 'react'
import Char from './char'
import * as CSS from 'csstype'
import settings from './settings'
import { judge } from './judge'

const challengeStyle: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    width: '100%',
    position: 'relative',
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
            Array.from(Array(5), (v, k) => k).forEach(i => {
                setTimeout(() => dispatch({index: i, results: rollJudges}), settings.rollInterval * i)
            })
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