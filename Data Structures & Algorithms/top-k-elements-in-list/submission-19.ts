class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = {};
        const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        for (let k in map) {
            bucket.at(map[k]).push(parseInt(k));
        }

        const res = [];
        for (let i = nums.length; i > 0; i--) {

            const vals = bucket[i]
            while (vals.length > 0 && res.length !== k) {
                res.push(vals.pop())
            }
        }

        return res;
    }
}
