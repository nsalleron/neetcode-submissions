class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let res = 0
        const dp: boolean[][] = Array.from({length: s.length}, () => [])

        for(let i = s.length - 1; i >= 0; i--){
            for(let j = i; j < s.length; j++){
                if(s[i] === s[j] && (j - i <= 2 || dp[i+1][j-1]) ){
                    dp[i][j] = true
                    res ++
                }
            }  
        }

        return res
    }
}
