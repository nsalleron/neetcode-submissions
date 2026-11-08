class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const result = []

        const dfs = (index: number, currentPerms: number[]) => {
            if(index === nums.length){
                result.push([...currentPerms])
            }

            for(let j = index; j < nums.length; j++){
                [currentPerms[j], currentPerms[index]] = [ currentPerms[index], currentPerms[j]];
                dfs(index + 1, currentPerms);
                [currentPerms[j], currentPerms[index]] = [ currentPerms[index], currentPerms[j]];
            }
        }

        dfs(0, [...nums])

        return result
    }
}
