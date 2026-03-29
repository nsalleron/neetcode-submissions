var separator = '#'

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    
    encode(strs) {
        var newString = ""
        for (let i = 0; i < strs.length; i++) {
            const length = strs[i].length

            newString += `${length}${separator}${strs[i]}`
        }

        return newString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)

        const allStrings = []
        var strs = str.split("")
        for(let i = 0; i < strs.length; ){
            let tmpNumber = ""

            for(let j = i; j < strs.length;){
                if(strs[j] === separator)
                    break;
                tmpNumber += strs[j]
                j++
            }

            const number = parseInt(tmpNumber)
            
            i += 1 + tmpNumber.length // separator
            const strrr = strs.slice(i, i + number).join("")
            allStrings.push(strrr)
            i += number
        }
        return allStrings
    }
}
