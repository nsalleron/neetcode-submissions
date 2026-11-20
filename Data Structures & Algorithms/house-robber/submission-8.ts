class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let rob1 = 0, rob2 = 0

        for(let c of nums){
            const temp = Math.max(c + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }

        return rob2
    }
}
