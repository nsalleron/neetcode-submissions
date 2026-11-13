class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const queue = [];
        const res = [];

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            while (queue.length > 0 && nums[r] > nums[queue[queue.length - 1]]) {
                queue.pop();
            }
            queue.push(r);
            if (queue[0] < l) {
                queue.shift();
            }
            if (r - l + 1 === k) {
                res.push(nums[queue[0]]);
                l++;
            }
        }

        return res;
    }
}
