import React, {useState, useEffect} from 'react'

const style = {
    display: 'inline-block',
    width: '20px',
    padding: '10px',
    margin: '5px',
    borderRadius: '3px',
    fontSize: '20px',
    backgroundColor: '#eee',
    cursor: 'pointer',
}
type Props = {
    char: string;
    value?: string;
    width?: number;
}
const Key = (props: Props) => {
    const s = {
        ...style,
        width: props.width ?? 20,
    }
    const val = props.char ?? props.value

    const clickHandler = () => console.log(val)
    return (
        <div className="Key" onClick={clickHandler} style={s}>
            {props.char}
        </div>
    )
}

export default Key