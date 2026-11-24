class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals = intervals.sort((a, b) => a[0] - b[0])
        let res = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            const [startI, endI] = res.pop();
            const [newStartI, newEndI] = intervals[i];
            if (endI < newStartI) {
                res.push([startI, endI], intervals[i]);
            } else if (startI < newEndI) {
                res.push([Math.min(startI, newStartI), Math.max(endI, newEndI)]);
            } else {
                if (startI === newEndI || endI === newStartI) {
                    res.push([Math.min(startI, newStartI), Math.max(endI, newEndI)]);
                } else {
                    res.push(intervals[i], [startI, endI]);
                }
            }
        }

        return res;
    }
}
