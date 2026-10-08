const SEPARATOR = '#'
class Solution {
    

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
       let newString = ""
       for(let str of strs){
            const length = str.length
            newString += `${length}${SEPARATOR}${str}`
       }
       return newString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
       const allString = []
       const strs = str.split('')
       for(let i = 0; i < strs.length ;){
            let tmpNumber = ""

            for (let j = i; j < strs.length; j++){
                if(strs[j] === SEPARATOR){
                    break
                }
                tmpNumber += strs[j]
            }

            const wordNumber = parseInt(tmpNumber)

            i = i + 1 + tmpNumber.length

            const strCut = strs.slice(i, wordNumber + i).join("")      
            allString.push(strCut)
            i += wordNumber
       }

       return allString

    }
}
