const Lottery = async function (callback: (word: string) => void) {
    let content = '';
    await fetch('words.txt')
        .then(response => response.text())
        .then(data => {
            content = data;
        })
    const words = content.split(/\n/)
    callback(words[Math.floor(Math.random() * words.length)])
}

export default Lottery