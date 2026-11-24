class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals = intervals.sort((a, b) => a[0] - b[0]);
        let res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            const last = res[res.length - 1];
            const [newStartI, newEndI] = intervals[i];
            if (last[1] < newStartI) {
                res.push(intervals[i]);
            } else {
                last[1] = Math.max(last[1], newEndI);
            }
        }

        return res;
    }
}
