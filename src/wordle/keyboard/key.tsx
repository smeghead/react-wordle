import React, {useState, useEffect} from 'react'

const style = {
    display: 'inline-block',
    padding: '10px',
    margin: '5px',
    borderRadius: '3px',
    fontSize: '3vw',
    backgroundColor: '#eee',
    cursor: 'pointer',
}
type Props = {
    char: string;
    value?: string;
    width?: string;
    keyboardHandler: (key: string) => void;
}
const Key = (props: Props) => {
    const s = {
        ...style,
        width: props.width ?? '2vw',
    }
    const val = props.value ?? props.char

    const clickHandler = () => props.keyboardHandler(val)
    return (
        <div className="Key" onClick={clickHandler} style={s}>
            {props.char}
        </div>
    )
}

export default Key