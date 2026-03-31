class Solution {

    

    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r){
            if(s[l] !== s[r]){
                let skipL = s.slice(l + 1, r + 1)
                let skipR = s.slice(l, r)
                
                const reverseL = [...skipL].reverse().join('');
                const reverseR = [...skipR].reverse().join('');
                return skipL == reverseL || skipR == reverseR
            }

            l++
            r--
        }   

        return true     
    }
}