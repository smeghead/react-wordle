/* eslint-disable react/jsx-key */
import React from 'react'
const charStyle = {
    width: '8vw',
    height: '8vw',
    border: '1px solid #333',
    fontSize: '5vw',
    margin: '5px',
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

type Props = {
    char: string;
    result?: string;
}

const getStyle = (props: Props) => {
    return {
        ...charStyle,
        backgroundColor: getBGColor(props.result ?? ''),
        color: getColor(props.result ?? '')
    }
}
const Char = (props: Props) => {
    return (
        <div className='Char' style={getStyle(props)}>
            <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                {props.char.toUpperCase()}
            </div>
        </div>
    )
}

export default Char