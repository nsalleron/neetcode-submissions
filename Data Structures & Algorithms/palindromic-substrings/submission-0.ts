class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let validSubstring = 0

        for(let i = 0; i < s.length; i++){
            let l = i, r = i
            while(l >= 0 && r < s.length && s[l] === s[r]){
                validSubstring += 1
                l--
                r++
            }

            l = i, r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                validSubstring += 1
                l--
                r++
            }

        }

        return validSubstring

    }
}
