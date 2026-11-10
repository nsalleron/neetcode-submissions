class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res = [];

        const stack = [];
        const dfs = (open, close) => {
            if (open === n && open === close) {
                return res.push([...stack].join(""));
            }

            if(stack[0] === ')'){
                return
            }

            if (open < n) {
                stack.push("(");
                dfs(open + 1, close);
                stack.pop()
            }
            if (close < open) {
                stack.push(")");
                dfs(open, close + 1);
                stack.pop()
            }
        };

        dfs(0, 0);

        return res;
    }
}
