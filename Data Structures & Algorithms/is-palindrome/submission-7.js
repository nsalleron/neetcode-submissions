class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        const cleanedS = []
        while(i < s.length){
            const value = s[i].charCodeAt(0)
            const isntInBounds = value < 48 || value > 57 && value < 65 || value > 90 && value < 97 || value > 122 
            if(!isntInBounds) {
                cleanedS.push(s[i].toLowerCase())
            }
            i++
        }


        let l = 0
        let r = cleanedS.length - 1
        while( l < r){
            if(cleanedS[l] != cleanedS[r]){
                return false
            }
            l++
            r--
        }


        return true
    }
}
