class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const output = []
        const queue = []

        let l = 0
        for(let r = 0; r < nums.length; r++){
            while(queue.length > 0 && nums[queue[queue.length - 1]] < nums[r]){
                queue.pop()
            }

            queue.push(r)

            if(queue[0] < l){
                queue.shift()
            }

            if(r + 1 >= k){
                output[l] = nums[queue[0]] //push
                l++
            }
        }

        return output

    }
}
