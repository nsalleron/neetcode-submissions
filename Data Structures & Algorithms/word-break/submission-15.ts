class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const memo: { [key: number]: boolean } = {};

        const dfs = (index: number) => {
            if (index === s.length) {
                return true;
            }

            if (memo[index] !== undefined) {
                return memo[index];
            }

            for (let w of wordDict) {
                if (s.slice(index, index + w.length) === w) {
                    if (dfs(index + w.length)) {
                        return (memo[index] = true);
                    }
                }
            }

            return (memo[index] = false);
        };

        return dfs(0);
    }
}
