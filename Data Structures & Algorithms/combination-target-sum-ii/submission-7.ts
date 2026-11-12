class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = []
        const stack = []
        const sortedCandidates = candidates.sort((a,b) => a - b)

        const dfs = (index: number, remaining: number) => {
            if(remaining === 0){
                return res.push([...stack])
            }

            if(sortedCandidates[index] > remaining || index === candidates.length){
                return
            }

            for(let i = index; i < candidates.length; i++){
                if(i > index && sortedCandidates[i] === sortedCandidates[i-1]){
                    continue
                }

                stack.push(sortedCandidates[i])
                dfs(i + 1, remaining - sortedCandidates[i])
                stack.pop()
            }
            
        }

        dfs(0, target)

        return res

    }
}
