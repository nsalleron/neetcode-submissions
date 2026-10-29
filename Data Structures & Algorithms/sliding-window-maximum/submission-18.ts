class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        if (nums.length < k) {
            return nums;
        }
        const deque = [];

        let res = [];
        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            while (nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }

            deque.push(r);

            if (deque[0] < l) {
                deque.shift();
            }
           
            if ((r - l + 1) >= k) {
                res.push(nums[deque[0]]);
                l++;
            }
        }
            return res;

    }
}
