class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res: number[][] = []

        const dfs = (index: number, part: number[]) => {
            if(index === nums.length){
                return res.push([...part])
            }
            for(let i = index; i < nums.length; i++){
                [part[index], part[i]] = [part[i], part[index]];
                dfs(index + 1, part);
                [part[i], part[index]] = [part[index], part[i]];
            }

        }

        dfs(0, nums)

        return res
    }

}
