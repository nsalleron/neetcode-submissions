class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
    const res: number[][] = [];

    const dfs = (idx: number, currentNums: number[]): void => {
        if (idx === currentNums.length) {
            res.push([...currentNums]);
            return;
        }

        for (let i = idx; i < currentNums.length; i++) {
            [currentNums[idx], currentNums[i]] =
                [currentNums[i], currentNums[idx]];

            dfs(idx + 1, currentNums);

            [currentNums[idx], currentNums[i]] =
                [currentNums[i], currentNums[idx]];
        }
    }

    dfs(0, [...nums]);
    return res;
}
}
