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
        var sortedIntervals = intervals.sort((a, b) => a.start - b.start)
        console.log(sortedIntervals)
        for(var i = 0; i < sortedIntervals.length - 1 ; i++){
            var currentInterval = sortedIntervals[i]
            var nextInterval = sortedIntervals[i + 1]
            console.log("current", currentInterval)
            console.log("next", nextInterval)
            if(currentInterval.end > nextInterval.start){
                return false
            }
        }

        return true

    }
}
