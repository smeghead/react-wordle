let words: string[] = []

class Lottery {
    async lotteryWord(callback: (word: string) => void): Promise<void> {
        let content = ''
        await fetch('words.txt')
            .then(response => response.text())
            .then(data => {
                content = data
            })
        words = content.split(/\n/)
        callback(words[Math.floor(Math.random() * words.length)])
    }

    validateWord(check: string): boolean {
        return words.includes(check)
    }    
}

export default Lottery