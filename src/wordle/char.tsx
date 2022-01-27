import React from 'react'

const Char = (props: {char: string}) => {
    return (
        <div className='Char' style={{width: '10px', height: '10px', border: '1px solid #333', display: 'inline-block', margin: '5px', padding: '5px'}}>
            {props.char}
        </div>
    )
}

export default Char