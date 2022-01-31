import React, {useState, useEffect} from 'react'
import Key from './key'

const style = {
    marginTop: '50px',
}
const Keyboard = () => {
    return (
        <div className='Keyboard' style={style}>
            <Key key="q" char="q" />
            <Key key="w" char="w" />
            <Key key="e" char="e" />
            <Key key="r" char="r" />
            <Key key="t" char="t" />
            <Key key="y" char="y" />
            <Key key="u" char="u" />
            <Key key="i" char="i" />
            <Key key="o" char="o" />
            <Key key="p" char="p" />
            <br />
            <Key key="a" char="a" />
            <Key key="s" char="s" />
            <Key key="d" char="d" />
            <Key key="f" char="f" />
            <Key key="g" char="g" />
            <Key key="h" char="h" />
            <Key key="j" char="j" />
            <Key key="k" char="k" />
            <Key key="l" char="l" />
            <br />
            <Key key="Enter" char="⏎" value={'Enter'} width={50} />
            <Key key="z" char="z" />
            <Key key="x" char="x" />
            <Key key="c" char="c" />
            <Key key="v" char="v" />
            <Key key="b" char="b" />
            <Key key="n" char="n" />
            <Key key="m" char="m" />
            <Key key="Backspace" char="BS" value={'Backspace'} width={50} />
        </div>
    )
}

export default Keyboard