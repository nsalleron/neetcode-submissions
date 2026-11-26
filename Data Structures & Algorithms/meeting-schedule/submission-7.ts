/**
 * Definition of Interval:
 * class Interval  {
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
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals = intervals.sort((a, b) => a.start - b. start)

        for(let i = 1; i < intervals.length; i++){
            let last = intervals[i - 1]
            let current = intervals[i]
            if(last.end > current.start){
                return false
            }
        }

        return true
    }
}
