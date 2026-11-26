class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        
        let pushed = false

        let res = []

        for(let i = 0; i < intervals.length; i ++){
            const [currStart, currEnd] = intervals[i]
            let [newStart, newEnd] = newInterval

            if(newEnd < currStart){
                if(!pushed){
                    res.push(newInterval)
                    pushed = true
                }
                res.push(intervals[i])
            } else if(currEnd < newStart){
                res.push(intervals[i])
            } else {
                newInterval = [
                    Math.min(currStart, newStart),
                    Math.max(currEnd, newEnd)
                ]
            }
        }

        if(!pushed){
            res.push(newInterval)
        }

        return res

    }
}
