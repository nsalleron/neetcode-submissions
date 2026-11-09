class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if(digits.length === 0 ){
            return []
        }
        const res = []
        const letterToArray = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }

        const backtrack = (index: number, letters: string) => {
            if(index === digits.length){
                res.push(letters)
                return 
            }

            const newLetters = letterToArray[digits[index]]

            for(let i = 0; i < newLetters.length; i++){
                const newLetter = newLetters[i]
                backtrack(index + 1, letters + newLetter)
            }
        }

        backtrack(0, "")


        return res


    }
}
