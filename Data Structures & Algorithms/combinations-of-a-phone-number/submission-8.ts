class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if(digits.length === 0){
            return []
        }

        const res = []
        const part = []

        const digitToChar = {
            '2' : 'abc',
            '3' : 'def',
            '4' : 'ghi',
            '5' : 'jkl',
            '6' : 'mno',
            '7' : 'qprs',
            '8' : 'tuv',
            '9' : 'wxyz'
        }

        const dfs = (index: number) => {
            if(index === digits.length){
                return res.push(part.join(''))
            }

            const str = digitToChar[digits[index]]

            for(let c of str){
                part.push(c)
                dfs(index + 1)
                part.pop()
            }

        }

        dfs(0)

        return res
    }
}
