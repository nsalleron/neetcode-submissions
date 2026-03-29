class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let indexOfS = 0
        for(let i = 0; i < t.length; i++){
            if(s[indexOfS] === t[i]){
                indexOfS += 1
            }
        }
        return indexOfS === s.length
    }
}
