import Lottery from '../lottery/lottery'

class Handler {
    setInput: (word: string) => void
    setChallenges: (challenges: string[]) => void
    setComplete: (complete: boolean) => void
    lottery: Lottery

    constructor(
        setInput: (word: string) => void,
        setChallenges: (challenges: string[]) => void,
        setComplete: (complete: boolean) => void,
        lottery: Lottery
    ) {
        this.setInput = setInput
        this.setChallenges = setChallenges
        this.setComplete = setComplete
        this.lottery = lottery
    }

    getChars() {
        const chars = []
        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            chars.push(String.fromCodePoint(i))
        }
        chars.push('Enter')
        chars.push('Backspace')
        return chars
    }
    
    process(key: string, word: string, input: string, challenges: string[]) {
        switch (key) {
            case 'Backspace':
                this.setInput(input.substring(0, input.length - 1))
                break
            case 'Enter':
                if (input.length < 5) {
                    return
                }
                if ( ! this.lottery.validateWord(input)) {
                    this.setInput('')
                    return
                }
                const challengesNew = Object.assign([], challenges)
                challengesNew.push(input)
                this.setChallenges(challengesNew)
                if (word === input) {
                    this.setComplete(true)
                    return
                }
                this.setInput('')
                break
            default:
                if (input.length < 5) {
                    this.setInput(input + key)
                }
        }
    }
}

export default Handler