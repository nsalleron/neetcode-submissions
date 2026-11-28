class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {

        const memo = {}

        const dfs = (index: number) => {
            if (index === s.length) {
                return 1;
            }

            if (s[index] === "0") {
                return 0;
            }

            if(memo[index] !== undefined) return memo[index]

            let res = dfs(index + 1);

            if (index + 1 < s.length && (s[index] === "1" || (s[index] === "2" && s[index + 1] <= "6"))) {
                res += dfs(index + 2);
            }

            return memo[index] = res;
        };

        return dfs(0);
    }
}
