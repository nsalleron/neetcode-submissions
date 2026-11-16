class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = []
        const part = []
        const sortedCandidates = candidates.sort((a, b) => a - b)

        const dfs = (index : number, remaining: number) => {
            if(remaining === 0){
                return res.push([...part])
            }

            if(remaining < 0 || index > candidates.length){
                return
            }
            
            for(let i = index; i < sortedCandidates.length; i++){
                if(i > index && sortedCandidates[i] === sortedCandidates[i-1]){
                    continue
                }

                part.push(sortedCandidates[i])
                dfs(i + 1, remaining - sortedCandidates[i])
                part.pop()
            }
        }

        dfs(0, target)

        return res
    }
}
