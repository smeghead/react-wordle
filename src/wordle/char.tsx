/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import * as CSS from 'csstype'
import settings from './settings'

const charStyle: CSS.Properties = {
    width: '8vw',
    height: '8vw',
    border: '1px solid #333',
    fontSize: '5vw',
    margin: '2px',
    padding: '0px',
    display: 'table',
    verticalAlign: 'middle',
}

const getColor = (result: string) => {
    switch (result) {
        case '':
            return '#333'
        default:
            return 'white'
    }
}
const getBGColor = (result: string) => {
    switch (result) {
        case 'correct':
            return '#6aaa64'
        case 'include':
            return '#c9b458'
        case 'fail':
            return '#787c7e'
        default:
            return '#fff'
    }
}
const getBorder = (result: string) => {
    switch (result) {
        case 'correct':
            return '#6aaa64'
        case 'include':
            return '#c9b458'
        case 'fail':
            return '#787c7e'
        default:
            return '#333'
    }
}

type Props = {
    char: string;
    result?: string;
    rollOpenClass?: string;
    judge: boolean;
}

const getStyle = (props: Props) => {
    return {
        ...charStyle,
        backgroundColor: getBGColor(props.result ?? ''),
        color: getColor(props.result ?? ''),
        borderColor: getBorder(props.result ?? ''),
    }
}
const Char = (props: Props): JSX.Element => {
    
    const [hideJudge, setHideJudge] = useState<string>(() => props.judge ? '' : 'hide-judge')
    useEffect(() => {
        if (hideJudge == 'hide-judge' && props.rollOpenClass === 'roll') {
            // setHideJudge('hide-judge')
            const timer = setTimeout(() => {
                setHideJudge('')
            }, settings.rollPeriod / 2)
            return () => clearTimeout(timer)
        }
    }, [props])
    return (
        <div className={'Char ' + props.rollOpenClass + ' ' + hideJudge} style={getStyle(props)}>
            <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                {props.char.toUpperCase()}
            </div>
        </div>
    )
}

export default Char