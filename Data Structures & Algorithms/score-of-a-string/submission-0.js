class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        const map = new Map()
        for(let i = 0; i < s.length ; i++){
            map.set(s[i], s[i].charCodeAt(0))
        }

        var result = 0
        for(let i = 0; i < s.length - 1 ; i++){
            result += Math.abs(map.get(s[i+1]) - map.get(s[i]))
        }

        return result
    }
}
