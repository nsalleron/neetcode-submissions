class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const combs = []
        const findCombinaisonSum = (i: number, currentComb: number[], combs: number[][]) => {
            const result = currentComb.reduce((a, b) => a + b, 0)
            if(result === target){
                combs.push([...currentComb])
                return 
            }
            if(result > target || i >= nums.length){
                return
            }

            currentComb.push(nums[i])
            findCombinaisonSum(i, currentComb, combs)
            currentComb.pop()
            findCombinaisonSum(i + 1, currentComb, combs)
        }

        findCombinaisonSum(0, [], combs)

        return combs
    }
}
