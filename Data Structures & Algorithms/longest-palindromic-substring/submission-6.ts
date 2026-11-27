class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let len = 0
        let str = []

        for(let i = 0; i < s.length; i++){
            let l = i;
            let r = i;
            while(l >= 0 && r < s.length){
                if(s[l] !== s[r]){
                    break
                }
                if((r - l + 1) > len){
                    len = (r - l + 1)
                    str = [l, r]
                }
                l--
                r++
            }

            l = i
            r = i + 1
            while(l >= 0 && r < s.length){
                if(s[l] !== s[r]){
                    break
                }
                if((r - l + 1) > len){
                    len = (r - l + 1)
                    str = [l, r]
                }
                l--
                r++
            }
        }

        return s.slice(str[0], str[1] + 1)
    }
}
