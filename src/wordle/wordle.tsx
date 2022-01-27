import React, {useState, useEffect } from 'react'

const wordleStyle = {
    margin: '5px auto',
    width: 500,
    height: 100,
    backgroundColor: 'gray',
};

const Wordle = (props: { word: string }) => {
    const [word, setWord] = useState(props.word)
    return (
        <div className="Wordle" style={wordleStyle}>
            {word}
            {/* {[...Array(10).keys()].reverse().map(i => <Line key={i} buffer={buffer[i]} offset={offset} />)} */}
        </div>
    );
}

export default Wordle;
// vim: set expandtab ts=2 sts=2 sw=2 :