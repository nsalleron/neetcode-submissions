class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sortedIntervals = intervals.sort((a,b) => a[0] - b[0])

        let res = [sortedIntervals[0]]

        for(let i = 1; i < sortedIntervals.length; i++){
            const [prevStart, prevEnd] = res[res.length - 1]
            const [currentStart, currentEnd] =sortedIntervals[i]
            if(prevEnd < currentStart){
                res.push(sortedIntervals[i])
            } else if (currentEnd >= prevEnd && currentStart <= prevEnd || prevStart <= currentEnd && currentStart <= prevStart) {
                res[res.length - 1] = [
                    Math.min(prevStart, currentStart),
                    Math.max(prevEnd, currentEnd)
                ]
            }

        }

        return res
    }
}
