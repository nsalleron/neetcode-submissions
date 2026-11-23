class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const memo = new Array<boolean | undefined>(s.length + 1);

        const dfs = (i: number) => {
            if (i === s.length) {
                return true;
            }
            if (memo[i]!== undefined) {
                return memo[i];
            }

            for (let word of wordDict) {
                if (s.startsWith(word, i) && dfs(i + word.length)) {
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
