const judge = (word:string, input: string, judge: boolean): string[] => {
    const judges: string[] = ['', '', '', '', '']
    if ( ! judge) {
        // 判定する指定が無い時は、空文字を返却する。
        return judges
    }
    const restChars: string[] = []
    Array.from(Array(5), (v, k) => k).forEach((v, index) => {
        const c = word.substring(index, index + 1)
        if (c === input.substring(index, index + 1)) {
            judges[index] =  'correct'
        } else {
            restChars.push(c)
        }
    })
    Array.from(input).forEach((c, index) => {
        if (judges[index] !== '') {
            return
        }
        judges[index] = restChars.includes(c) ? 'include' : 'fail'
    })
    return judges
}

export { judge }