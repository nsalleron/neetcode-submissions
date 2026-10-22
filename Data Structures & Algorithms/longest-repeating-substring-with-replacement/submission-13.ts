class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map: Map<string, number> = new Map()

        let l = 0
        let r = 0

        let maxLength = 0
        let maxFreq

        while(r < s.length){
            map.set(s[r], (map.get(s[r]) || 0 ) + 1)

            maxFreq = Math.max(maxFreq, (r - l + 1) - map.get(s[r]))
            if((r - l + 1) - Math.max(...map.values()) > k){
                map.set(s[l], (map.get(s[l]) || 0 ) - 1)
                l++
            }

            maxLength = Math.max(maxLength, (r - l + 1))
            r++
        }



        return maxLength


    }
}
