class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];
        const part = [];

        const dfs = (index: number) => {
            if (index === sortedNums.length) {
                return res.push([...part]);
            }

            part.push(sortedNums[index]);
            dfs(index + 1);
            part.pop();

            while (sortedNums[index] === sortedNums[index + 1]) {
                index++;
            }
            dfs(index + 1);
        };

        dfs(0);

        return res;
    }
}
