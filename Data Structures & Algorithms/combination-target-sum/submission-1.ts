class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = []

        const dfs = (index: number, current: number[]) => {
            const sum = current.reduce((a, b) => a + b, 0)

            if(index === nums.length || sum > target){
                return
            }

            if(sum === target){
                return res.push([...current])
            }

            current.push(nums[index])
            dfs(index, current)
            current.pop()

            dfs(index + 1, current)
        }


        dfs(0, [])

        return res


    }
}
