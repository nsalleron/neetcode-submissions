class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals = intervals.sort((a, b) => a[0] - b[0])

        let res = 0
        let prevEnd = intervals[0][1]
        for(let i = 1; i < intervals.length; i++){
            const [newStartI, newEndI] = intervals[i]
            if(newStartI >= prevEnd){
                prevEnd = newEndI
            } else {
                    res++

                prevEnd = Math.min(newEndI, prevEnd)
            }
        }


        return res
    }
}
