class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const memo = {};

        const dfs = (index: number) => {
            if (index === s.length) {
                return 1;
            }

            if (memo[index] !== undefined) {
                return memo[index];
            }

            if (s[index] === "0") {
                return 0;
            }
            let count = dfs(index + 1);

            if (
                index + 1 < s.length &&
                (s[index] === "1" || (s[index] <= "2" && s[index + 1] <= "6"))
            ) {
                count += dfs(index + 2);
            }

            return (memo[index] = count);
        };

        return dfs(0);
    }
}
