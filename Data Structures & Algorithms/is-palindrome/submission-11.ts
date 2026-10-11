class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let sAlphanumerical = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

        let l = 0
        let r = sAlphanumerical.length - 1

        while(l < r){
            if(sAlphanumerical[l] !== sAlphanumerical[r]){
                return false
            }
            l++
            r--
        }

        return true
    
    }
}
