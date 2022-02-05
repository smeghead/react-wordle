import React from 'react'

type Props = {
    word: string;
}
const Result = (props: Props) => {
    const onClick = () => {
        const link = 'https://www.ldoceonline.com/jp/dictionary/' + props.word
        window.open(link, '_blank')
    }
    return (
        <div className='Result'>
            <div>
                <a className="btn" onClick={onClick} target="_blank">{props.word.toUpperCase()} in dictionary</a>
            </div>
            <div>
                <a className="btn" href="">Try again</a>
            </div>
        </div>
    )
}

export default Result