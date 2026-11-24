class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const [newStart, newEnd] = newInterval;

        const res = [];
        let newInsert = false;
        for (let i = 0; i < intervals.length; i++) {
            const [start_i, end_i] = intervals[i];
            if (end_i < newStart) {
                res.push(intervals[i]);
            } else if (start_i > newEnd) {
                if (!newInsert) {
                    res.push(newInterval);
                    newInsert = true;
                }
                res.push(intervals[i]);
            } else {
                 newInterval = [
                    Math.min(start_i, newInterval[0]),
                    Math.max(end_i, newInterval[1]),
                ];
            }
        }

        if(!newInsert){
            res.push(newInterval)
        }

        return res;
    }
}
