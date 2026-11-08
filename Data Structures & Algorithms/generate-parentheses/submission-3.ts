class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const result = []

        const dfs = (open, close, str) => {
            if(open === n && open === close){
                result.push(str)
            }

            if(open < n){
                dfs(open+1, close, str + "(")
            }

            if(close < open){
                dfs(open, close + 1, str + ")")
            }

        }

        dfs(0,0, "")

        return result
    }
}
