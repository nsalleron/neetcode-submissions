const encode = '#'


class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let str = ''
        for(let s of strs){
            str += s.length + encode + s
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log(str)
        let strs = []
        for(let i = 0; i < str.length; i++){
            let stringNumber = ''
            while(str[i] !== encode){
                stringNumber = stringNumber + str[i]
                i++
            }
            
            let decodedNumber = parseInt(stringNumber)
            strs.push(str.slice(i + 1, i + 1 + decodedNumber))

            i = i + decodedNumber
        }

        return strs
    }
}
