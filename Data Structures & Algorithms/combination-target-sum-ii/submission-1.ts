class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates = candidates.sort((a, b) => a - b)
        const combs = [];
        const findCombinaisonSum = (i: number, currentComb: number[]) => {
            const result = currentComb.reduce((a, b) => a + b, 0);
            if (result === target) {
                combs.push([...currentComb]);
                return;
            }
            if (result > target || i >= candidates.length) {
                return;
            }

            for(let j = i; j < candidates.length; j ++){
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }
                if (result + candidates[j] > target) {
                    break;
                }
                currentComb.push(candidates[j]);
                findCombinaisonSum(j + 1, currentComb);
                currentComb.pop()
            }
        };

        findCombinaisonSum(0, []);

        return combs;
    }
}
