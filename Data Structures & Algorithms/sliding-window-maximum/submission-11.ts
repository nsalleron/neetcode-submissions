class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const queue = []
        const output = []
        
        let l = 0;
        for(let r = 0; r < nums.length; r++){
            while(queue.length > 0 && nums[queue[queue.length - 1]] < nums[r]){
                queue.pop()
            }

            queue.push(r)

            // On remove les elements qui ne devrait pas etre dans la que 
            if(queue[l] + k - 1 < r){
                queue.shift()
            }

            if(r + 1 >= k){
                output.push(nums[queue[0]])
            }
        }

        return output
    }
}
