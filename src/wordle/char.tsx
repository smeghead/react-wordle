import React from 'react'
const charStyle = {
    width: '20px',
    height: '20px',
    border: '1px solid #333',
    margin: '5px',
    padding: '5px',
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

const displayKeyboard = () => document.getElementById('hidden-text')?.focus();

const Char = (props: {char: string, result?: string}) => {
    return (
        <div className='Char' onClick={displayKeyboard} style={{...charStyle, backgroundColor: getBGColor(props.result ?? ''), color: getColor(props.result ?? '')}}>
            {props.char}
        </div>
    )
}

export default Char