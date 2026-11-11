class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const charMap = new Map()

        let res = 0
        let l = 0
        for(let r = 0; r < s.length; r++){
            charMap.set(s[r], (charMap.get(s[r]) ?? 0) + 1)
            while((r - l + 1) - Math.max(...charMap.values()) > k){
                charMap.set(s[l], charMap.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
