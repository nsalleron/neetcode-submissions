class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const memo = {};

        const dfs = (i: number) => {
            if (i === s.length) {
                return true;
            }
            if (i in memo) {
                return memo[i];
            }

            let slice = s.slice(i);

            for (let word of wordDict) {
                if (slice.startsWith(word) && dfs(i + word.length)) {
                    memo[i] = true;
                    return true;
                }
            }
            memo[i] = false;
            return false;
        };

        return dfs(0);
    }
}
