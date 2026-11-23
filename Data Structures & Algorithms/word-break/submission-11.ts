class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp = Array.from({length: s.length + 1}, () => false)
        dp[s.length] = true

        for(let i = s.length - 1; i >= 0; i--){
            for(let word of wordDict){
                if(i + word.length <= s.length && s.startsWith(word, i)){
                    dp[i] = dp[i + word.length]
                }
                if(dp[i]) break
            }
        }

        return dp[0]
    }
}
