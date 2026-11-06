class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = []
        const current= []
        // On trie une copie pour ne pas modifier nums
        const sorted = [...nums].sort((a, b) => a - b)

        const dfs = (index: number, remaining: number) => {
            if(remaining === 0){
                res.push([...current])
                return 
            }

            if(index === nums.length || sorted[index] > remaining){
                return
            }

            current.push(sorted[index])
            dfs(index, remaining - sorted[index])
            current.pop()

            dfs(index + 1, remaining)
        }


        dfs(0, target)

        return res


    }
}
