class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        const backtrack = (index: number, currents: number[]) => {
            if (index === sortedNums.length) {
                res.push([...currents]);
                return;
            }

            currents.push(sortedNums[index]);
            backtrack(index + 1, currents);
            currents.pop();
            while (sortedNums[index] === sortedNums[index + 1]) {
                index++;
            }
            backtrack(index + 1, currents);
        };

        backtrack(0, []);

        return res;
    }
}
