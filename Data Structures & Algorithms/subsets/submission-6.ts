class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];

        const backtracking = (index: number, currentNums: number[]) => {
            if (index === nums.length) {
                return res.push([...currentNums]);
            }

            currentNums.push(nums[index]);
            backtracking(index + 1, currentNums);
            currentNums.pop();
            backtracking(index + 1, currentNums);
        };

        backtracking(0, []);

        return res;
    }
}
