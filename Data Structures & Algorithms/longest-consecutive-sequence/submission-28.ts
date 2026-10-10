class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0;
        const uniqNums = new Set(nums);

        for (let num of uniqNums.values()) {
            const previousNum = num - 1;
            let consecutive = 1;

            if (uniqNums.has(previousNum)) {
                continue;
            }
            let nextNum = num + 1;
            while (uniqNums.has(nextNum)) {
                nextNum += 1;
                consecutive += 1;
            }

            if (consecutive > res) {
                res = consecutive;
            }
        }

        return res;
    }
}
