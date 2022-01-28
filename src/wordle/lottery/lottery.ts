let words: string[] = []

const Lottery = async function (callback: (word: string) => void) {
    let content = '';
    await fetch('words.txt')
        .then(response => response.text())
        .then(data => {
            content = data;
        })
    words = content.split(/\n/)
    callback(words[Math.floor(Math.random() * words.length)])
}

const validateWord = (check: string) => {
    return words.includes(check)
}
export {validateWord}

export default Lottery