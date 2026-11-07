class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res = []

        const backtrack = (level: number, str: string, open:number, close: number) => {
            if(open === close && open === n){
                res.push(str + "")
                return
            }

            if(open < n){
                backtrack(level + 1, str + "(", open + 1, close)
            }
            if(close < open){
                backtrack(level + 1, str + ")", open, close + 1)
            }
        }

        backtrack(0, "", 0, 0)

        return res
    }
}
