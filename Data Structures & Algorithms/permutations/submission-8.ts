class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const result = []

        const dfs = (index: number, current:number[]) => {
            if(index === current.length){
                return result.push([...current])
            }

            for(let i = index; i < nums.length; i++){
                [current[i], current[index]] = [current[index], current[i]];
                dfs(index + 1, current);
                [current[i], current[index]] = [current[index], current[i]];
            }
        }

        dfs(0, [...nums])

        return result
    }
}