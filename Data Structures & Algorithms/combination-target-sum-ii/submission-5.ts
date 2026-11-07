class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const sortedCandidates = candidates.sort((a, b) => a - b)
        const results = []

        const dfs = (index: number, current: number[]) => {
            let sum = current.reduce((a, b) => a + b, 0)

            if(index > sortedCandidates.length || sum > target){
                return 
            }

            if(sum === target){
                results.push([...current])
                return
            }

            for(let i = index; i < sortedCandidates.length; i ++){
                if(i > index && sortedCandidates[i] === sortedCandidates[i-1]){
                    continue
                }
                current.push(sortedCandidates[i])
                dfs(i + 1, current)
                current.pop()
            }
        }

        dfs(0, [])

        return results
    }
}
