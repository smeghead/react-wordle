import Lottery from '../lottery/lottery'
import settings from '../settings'

class Handler {
    setInput: (word: string) => void
    setChallenges: (challenges: string[]) => void
    setComplete: (complete: boolean) => void
    setJiggle: (jiggle: string) => void
    setRollOpenClass: (rollOpenClass: string) => void
    lottery: Lottery

    constructor(
        setInput: (word: string) => void,
        setChallenges: (challenges: string[]) => void,
        setComplete: (complete: boolean) => void,
        setJiggle: (jiggle: string) => void,
        setRollOpenClass: (rollOpenClass: string) => void,
        lottery: Lottery
    ) {
        this.setInput = setInput
        this.setChallenges = setChallenges
        this.setComplete = setComplete
        this.setJiggle = setJiggle
        this.setRollOpenClass = setRollOpenClass
        this.lottery = lottery
    }

    getChars(): string[] {
        const chars = []
        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            chars.push(String.fromCodePoint(i))
        }
        chars.push('Enter')
        chars.push('Backspace')
        return chars
    }

    setRollOpen(setRollOpenClass: (rollOpenClass: string) => void, next: () => void): void {
        setRollOpenClass('roll')
        setTimeout(next, settings.rollInterval * 4 + settings.rollPeriod)
    }
    
    process(key: string, word: string, input: string, challenges: string[]): void {
        const setChallenges = this.setChallenges
        const setComplete = this.setComplete
        const setInput = this.setInput
        const setRollOpenClass = this.setRollOpenClass
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
                this.setRollOpen(this.setRollOpenClass, () => {
                    // eslint-disable-next-line no-case-declarations
                    const challengesNew = Object.assign([], challenges)
                    challengesNew.push(input)
                    setChallenges(challengesNew)
                    if (word === input) {
                        setComplete(true)
                        return
                    }
                    setRollOpenClass('')
                    setInput('')
                })
                break
            default:
                if (input.length < 5) {
                    this.setInput(input + key)
                }
        }
    }
}

export default Handler