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
        const stack = []
        const digitsToLetter = {
            '2': ['a', 'b', 'c' ],
            '3': ['d', 'e', 'f' ],
            '4': ['g', 'h', 'i' ],
            '5': ['j', 'k', 'l' ],
            '6': ['m', 'n', 'o' ],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v' ],
            '9': ['w', 'x', 'y', 'z' ]
        }

        const dfs = (index: number) => {
            if(index >= digits.length){
                return res.push(stack.join(''))
            }

            const currentAlphabet = digitsToLetter[digits[index]]
            for(let i = 0; i < currentAlphabet.length; i++){
                stack.push(currentAlphabet[i])
                dfs(index + 1 )
                stack.pop()
            }
        }

        dfs(0)
        return res
    }
}
