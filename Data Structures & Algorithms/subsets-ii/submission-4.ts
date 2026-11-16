class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = []
        const part = []
        const sortedNums = nums.sort((a, b) => a-b)

        const dfs = (index: number) => {
            if(index === nums.length){
                return res.push([...part])
            }

            part.push(sortedNums[index])
            dfs(index + 1)
            part.pop()

            while(index < nums.length && sortedNums[index] === sortedNums[index + 1]){
                index ++
            }

            dfs(index + 1)
        }

        dfs(0)

        return res

    }
}
