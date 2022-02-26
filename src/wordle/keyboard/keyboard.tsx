import React from 'react'
import Key from './key'

const style = {
    marginTop: '50px',
}

type Props = {
    keyboardHandler: (key: string) => void;
    word: string;
    challenges: string[];
}
const Keyboard = (props: Props) => {
    return (
        <div className='Keyboard' style={style}>
            <Key key="q" char="q" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="w" char="w" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="e" char="e" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="r" char="r" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="t" char="t" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="y" char="y" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="u" char="u" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="i" char="i" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="o" char="o" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="p" char="p" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <br key="br1" />
            <Key key="a" char="a" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="s" char="s" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="d" char="d" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="f" char="f" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="g" char="g" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="h" char="h" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="j" char="j" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="k" char="k" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="l" char="l" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <br key="br2" />
            <Key key="Enter" char="⏎" value={'Enter'} width={'10vw'} keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="z" char="z" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="x" char="x" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="c" char="c" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="v" char="v" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="b" char="b" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="n" char="n" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="m" char="m" keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
            <Key key="Backspace" char="BS" value={'Backspace'} width={'10vw'} keyboardHandler={props.keyboardHandler} word={props.word} challenges={props.challenges} />
        </div>
    )
}

export default Keyboard