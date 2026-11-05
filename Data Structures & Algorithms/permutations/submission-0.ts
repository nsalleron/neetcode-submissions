class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        
        const dfs = (i: number, nums: number[]) => {
            if(i == nums.length){
                return [[]]
            }

            let resPerms = []
            let perms = dfs(i+1, nums)

            for(let p of perms){
                for(let j = 0; j <= p.length ; j++){
                    const copy = [...p]
                    copy.splice(j,0, nums[i])
                    resPerms.push(copy)
                }
            }
            return resPerms
        }
        return dfs(0, nums)
    }
}
