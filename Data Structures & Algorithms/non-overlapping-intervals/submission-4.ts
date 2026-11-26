class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals = intervals.sort((a, b) => a[0] - b[0])

        const res = [intervals[0]]

        let count = 0
        for(let i = 1; i < intervals.length; i++){
            const [startI, endI] = intervals[i]
            const [prevStart, prevEnd] = res[res.length - 1]

            if(prevEnd <= startI){
                res.push(intervals[i])
            } else {
                res[res.length -1][1] = Math.min(endI, prevEnd)

                count ++
            }
        }

        return count
    }
}
