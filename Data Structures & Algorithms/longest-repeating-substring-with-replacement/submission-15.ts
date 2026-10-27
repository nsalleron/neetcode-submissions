class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freq = new Map();
        let length = 0;

        let l = 0;
        for (let r = 0; r < s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);

            while (r - l + 1 - Math.max(...freq.values()) > k) {
                console.log("here");

                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            length = Math.max(length, r - l + 1);
        }

        return length;
    }
}
