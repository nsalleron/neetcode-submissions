class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = []

        const dfs = (i:number, current: number[]) => {
            if(i === nums.length){
                res.push([...current])
                return
            }

            current.push(nums[i])
            dfs(i+1, current)

            current.pop()
            dfs(i+1, current)
        }

        dfs(0, [])        

        return res
    }
}
