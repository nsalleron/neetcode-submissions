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
            '2' : ['a','b','c'],
            '3' : ['d','e','f'],
            '4' : ['g','h','i'],
            '5' : ['j','k','l'],
            '6' : ['m','n','o'],
            '7' : ['q','p','r', 's'],
            '8' : ['t','u','v'],
            '9' : ['w','x','y', 'z']
        }

        const dfs = (index: number) => {
            if(index === digits.length){
                return res.push([part.join('')])
            }

            const charArray = digitToChar[digits[index]]

            for(let c of charArray){
                part.push(c)
                dfs(index + 1)
                part.pop()
            }

        }

        dfs(0)

        return res
    }
}
