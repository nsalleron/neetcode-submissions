class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque = []
        const res = []
        let l = 0
        for(let r = 0; r < nums.length; r++){
            while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]){
                deque.pop()
            }

            deque.push(r)
            
            if(deque[0] < l){
                deque.shift()
            }

            if(deque.length > 0 && (r - l + 1) >= k){

                l++
                res.push(nums[deque[0]])
            }
        }

        return res
    }
}
