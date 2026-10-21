class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let count = new Map()
        let res = 0 
        let l = 0


        let maxFreq = 0
        for(let r = 0; r < s.length; r ++){
            count.set(s[r], (count.get(s[r]) || 0) + 1)
            maxFreq = Math.max(maxFreq, count.get(s[r])!);
            while(r - l + 1 - maxFreq > k){
                count.set(s[l], count.get(s[l]) - 1)
                l++ //cela recalcule la taille à chaque fin iteration
            }

            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
