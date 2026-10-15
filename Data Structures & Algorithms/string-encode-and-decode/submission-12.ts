const separator = '#'


class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = ''

        for( let str of strs){
            encodedString += str.length + separator + str
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []
        for(let i = 0; i < str.length ; i++){
            let numberChar = ''
            let currentChar = str[i]
       
            while(currentChar !== separator){
                numberChar += currentChar
                i++
                currentChar = str[i]
            }
            
            let strToSave = ''
            let endOfWordIndex = i + parseInt(numberChar)
       
            while(i !== endOfWordIndex){
                i++
                strToSave += str[i]            
            }
            res.push(strToSave)
        }

        return res
    }
}
