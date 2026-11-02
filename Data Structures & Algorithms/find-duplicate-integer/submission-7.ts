class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0;
        let fast = 0;

        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow !== fast);

        let slow2 = 0;

        do {
            slow2 = nums[slow2];
            slow = nums[slow];
        } while (slow !== slow2);
        return slow;
    }
}
