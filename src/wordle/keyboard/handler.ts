import Lottery from '../lottery/lottery'

class Handler {
    setInput: (word: string) => void
    setChallenges: (challenges: string[]) => void
    setComplete: (complete: boolean) => void
    setJiggle: (complete: string) => void
    lottery: Lottery

    constructor(
        setInput: (word: string) => void,
        setChallenges: (challenges: string[]) => void,
        setComplete: (complete: boolean) => void,
        setJiggle: (jiggle: string) => void,
        lottery: Lottery
    ) {
        this.setInput = setInput
        this.setChallenges = setChallenges
        this.setComplete = setComplete
        this.setJiggle = setJiggle
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
                    this.setJiggle('refuse alert')
                    // this.setInput('')
                    return
                }
                // eslint-disable-next-line no-case-declarations
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