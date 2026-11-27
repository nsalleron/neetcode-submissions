class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates = candidates.sort((a, b) => a - b);
        const res = [];

        const part = [];
        const dfs = (index, remaining) => {
            if (remaining === 0) {
                res.push([...part]);
                return;
            }
            if (remaining < 0) {
                return;
            }

            for(let i = index; i < candidates.length; i++){
                if(i > index && candidates[i - 1] == candidates[i]){ continue}
                
                part.push(candidates[i]);
                dfs(i + 1, remaining - candidates[i]);
                part.pop();


            }
        };

        dfs(0, target);

        return res;
    }
}
