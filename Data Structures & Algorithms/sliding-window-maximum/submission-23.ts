class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res = []

        const arr = []
        let l = 0
        for(let r = 0; r < nums.length; r++){
            while(arr.length > 0 && nums[arr[arr.length - 1]] < nums[r]){
                arr.pop()
            }

            arr.push(r)

            if(arr[0] < l){
                arr.shift()
            }

            if((r - l + 1) >= k){
                res.push(nums[arr[0]])
                l++
            }
        }

        return res

    }
}
