const encode = '#'
class Solution {

    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = ''
        for(let str of strs.map((e) => e.length + encode + e)){
            encodedStr += str
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []

        let stringNumber = ''
        for(let i = 0; i < str.length; i++){
            if(str[i] === '#'){
                const wordLength = parseInt(stringNumber)
                res.push(str.slice(i + 1, i + 1 + wordLength))
                i += wordLength
                stringNumber = ''
            } else {
                stringNumber += str[i]
            }
        }
       

        return res
    }
}
