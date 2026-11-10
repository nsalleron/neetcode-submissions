class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let res = 0

        const set = new Set()

        let l = 0
        for(let r = 0; r < s.length ; r++){
            const letter = s[r]

            while(set.has(letter)){
                const removedLetter = s[l]
                set.delete(removedLetter)
                l++
            }

            set.add(letter)
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
