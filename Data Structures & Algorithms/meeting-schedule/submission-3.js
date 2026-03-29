/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sortedIntervals = intervals.sort((a, b) => a.start - b.start)
        console.log(sortedIntervals)
        for(let i = 0; i < sortedIntervals.length - 1 ; i++){
            const firstInterval = sortedIntervals[i]
            const secondInterval = sortedIntervals[i + 1]

            if(firstInterval.end > secondInterval.start)
                return false
        }
        return true
    }
}
