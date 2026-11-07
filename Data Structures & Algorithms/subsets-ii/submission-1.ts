class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];

        const sortedNums = nums.sort((a, b) => a - b);

        const backtrack = (i: number, current: number[]) => {
            if (i === sortedNums.length) {
                res.push([...current]);
                return;
            }

            current.push(sortedNums[i]);
            backtrack(i + 1, current);
            current.pop();

            while(i + 1 < nums.length && nums[i] === nums[i + 1 ]){
                i++
            }

            backtrack(i + 1, current);
        };

        backtrack(0, []);

        return res;
    }
}
