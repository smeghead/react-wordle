import React, {useState, useEffect} from 'react'
import Key from './key'

const style = {
    marginTop: '50px',
}

type Props = {
    keyboardHandler: (key: string) => void;
}
const Keyboard = (props: Props) => {
    return (
        <div className='Keyboard' style={style}>
            <Key key="q" char="q" keyboardHandler={props.keyboardHandler} />
            <Key key="w" char="w" keyboardHandler={props.keyboardHandler} />
            <Key key="e" char="e" keyboardHandler={props.keyboardHandler} />
            <Key key="r" char="r" keyboardHandler={props.keyboardHandler} />
            <Key key="t" char="t" keyboardHandler={props.keyboardHandler} />
            <Key key="y" char="y" keyboardHandler={props.keyboardHandler} />
            <Key key="u" char="u" keyboardHandler={props.keyboardHandler} />
            <Key key="i" char="i" keyboardHandler={props.keyboardHandler} />
            <Key key="o" char="o" keyboardHandler={props.keyboardHandler} />
            <Key key="p" char="p" keyboardHandler={props.keyboardHandler} />
            <br />
            <Key key="a" char="a" keyboardHandler={props.keyboardHandler} />
            <Key key="s" char="s" keyboardHandler={props.keyboardHandler} />
            <Key key="d" char="d" keyboardHandler={props.keyboardHandler} />
            <Key key="f" char="f" keyboardHandler={props.keyboardHandler} />
            <Key key="g" char="g" keyboardHandler={props.keyboardHandler} />
            <Key key="h" char="h" keyboardHandler={props.keyboardHandler} />
            <Key key="j" char="j" keyboardHandler={props.keyboardHandler} />
            <Key key="k" char="k" keyboardHandler={props.keyboardHandler} />
            <Key key="l" char="l" keyboardHandler={props.keyboardHandler} />
            <br />
            <Key key="Enter" char="⏎" value={'Enter'} width={'5vw'} keyboardHandler={props.keyboardHandler} />
            <Key key="z" char="z" keyboardHandler={props.keyboardHandler} />
            <Key key="x" char="x" keyboardHandler={props.keyboardHandler} />
            <Key key="c" char="c" keyboardHandler={props.keyboardHandler} />
            <Key key="v" char="v" keyboardHandler={props.keyboardHandler} />
            <Key key="b" char="b" keyboardHandler={props.keyboardHandler} />
            <Key key="n" char="n" keyboardHandler={props.keyboardHandler} />
            <Key key="m" char="m" keyboardHandler={props.keyboardHandler} />
            <Key key="Backspace" char="BS" value={'Backspace'} width={'5vw'} keyboardHandler={props.keyboardHandler} />
        </div>
    )
}

export default Keyboard