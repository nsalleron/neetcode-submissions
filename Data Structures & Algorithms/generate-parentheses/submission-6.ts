class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res = []
        const part = []
        const dfs = (open, close) => {
            if(open === close && open === n){
                return res.push(part.join(''))
            }
            if(close > open){
                return null
            }
        

            if(open < n){
                part.push('(')
                dfs(open + 1, close)
                part.pop()
            }
            
            if(close < open){
                part.push(')')
                dfs(open, close + 1)
                part.pop()
            }
        }

        dfs(0,0)

        return res
    }
}
