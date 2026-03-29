class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sR = s.split("").sort((a,b) => a.localeCompare(b)).join("")
        const tR = t.split("").sort((a,b) => a.localeCompare(b)).join("")

        return sR == tR
    }
}
