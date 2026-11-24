class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        
        let maxLen = Number.MIN_SAFE_INTEGER
        let res = []
        for(let i = 0; i < s.length; i++){
            let l = i
            let r = i
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if((r - l + 1) > maxLen){
                    maxLen = r - l + 1
                    res = [l, r]
                } 
                l--
                r++

            }

            l = i
            r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if( (r - l + 1) > maxLen){
                    maxLen = r - l + 1
                    res = [l, r]
                } 
                l--
                r++

            }
        }

        return s.slice(res[0], res[1] + 1)
    }

}
